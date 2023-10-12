import express, { Express, NextFunction, Request, Response } from "express"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import cors from "cors"
import { config } from "dotenv"
config()

import DatabaseError from "./src/errors/DatabaseError"
import CustomError from "./src/errors/CustomError"
import withAuth from "./src/middlewares/withAuth"
import SessionModel from "./src/models/SessionModel"
import UserModel, { IUserDocumnet, IUser } from "./src/models/UserModel"
import UnknownError from "./src/errors/UnknownError"
import withUser from "./src/middlewares/withUser"

const app: Express = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: "http://localhost:3000"}))

const EXPRESS_PORT = process.env.BACKEND_PORT

app.listen(EXPRESS_PORT, () => {
  mongoose.connect(`mongodb://database/custom_schedule_db`)
  console.log(`Server started on port ${EXPRESS_PORT}!!`)
})

app.get("/", async (req: Request, res: Response) => {
  res.json({message: "Hi there!"})
})

// ======== Auth-related ========

app.post("/auth/sign-in", async (req: Request,  res: Response, next: NextFunction) => {
  console.log("======= NEW LOGIN =======\n", req.body)
  
  res.clearCookie("session_id")

  const newSessionId = Math.random().toString() // temp, obviously

  try {
    await SessionModel.create({
      session_id: newSessionId,
      email: req.body.email
    })
    
    res.cookie("session_id", newSessionId)
    
    res.status(200).json({message: "User signed in. Session created successfully!"})
  } catch (err) {
    return next(new DatabaseError("Can't create new session due to internal server error."))
  }

  // ======= create user in db if he doesn't exist yet: =======

  const user = await UserModel.findOne({email: req.body.email})
  
  if (user) return
  
  // TODO: if this will fail (somehow), then this is should defentetly be logged and inspected
  UserModel.create({
    email: req.body.email,
    classes: [],
    classSchedules: [],
    assembledSchedules: []
  })
})

app.get("/auth/validate-session", withAuth, async (req: Request, res: Response) => {
  return res.status(200).json({isSessionValid: true})
})

app.get("/users/me", withAuth, async (req: Request, res: Response) => {
  // TODO: there is no way this user can be null, so if it IS - this is too should be logged and inspected
  const targetUser = await UserModel.findOne({
    email: res.locals.targetSession.email
  })
  
  return res.status(200).json(targetUser.toJSON())
})

// ======== Classes ========

app.get("/users/me/classes", withAuth, withUser, async (req: Request, res: Response) => {
  const targetUser: IUserDocumnet = res.locals.targetUser
  res.status(200).json({classes: targetUser.classes})
})

app.post("/users/me/classes", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.targetUser
    
    const newClass = {
      title: req.body.title, 
      teacher: req.body.teacher,
      cabinet: req.body.cabinet,
      uid: req.body.uid
    }

    console.log("======== newClass ========\n", newClass)

    targetUser.classes.push(newClass)
    await targetUser.save()

    return res.status(200).json({
      message: "Class successfully added!",
      classes: targetUser.classes
    })
  } catch(err) {
    return next(new DatabaseError("Database call to add new class failed due to some internal server error."))
  }
})

app.put("/users/me/classes/:uid", withAuth, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { email: res.locals.targetSession.email, "classes.uid": req.params.uid },
      {
        $set: {
          "classes.$": {
            title: req.body.title,
            teacher: req.body.teacher,
            cabinet: req.body.cabinet,
            uid: req.params.uid
          }
        }
      },
      { new: true }
    )

    if (!updatedUser) {
      return next(new DatabaseError(`Can't update class with id ${req.params.uid}, most likely because it's not exist`))
    }

    return res.status(200).json({
      message: "Class successfully updated!",
      classes: updatedUser.toJSON().classes
    })

  } catch(err) {
    return next(new DatabaseError("Database call to edit user's class failed due to some internal server error."))
  }
})

app.delete("/users/me/classes/:uid", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.targetUser

    const initLength = targetUser.classes.length
    targetUser.classes = targetUser.classes.filter(c => c.uid !== req.params.uid)

    if (targetUser.classes.length === initLength) {
      return next(new DatabaseError(`Can't delete class with id ${req.params.uid}, most likely because it's not exist`))
    }

    await targetUser.save()

    return res.status(200).json({
      message: `Class with id ${req.params.uid} successfully deleted!`,
      classes: targetUser.classes
    })
  } catch(err) {
    return next(new DatabaseError("Database call to delete class failed due to some internal server error."))
  }

})

// this is just a debug endpoint that will not present in prod version of the app 
app.delete("/users/me/delete-all-classes", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.targetUser
    
    targetUser.classes = []

    await targetUser.save()
  } catch(err) {
    return next(new DatabaseError("Database call to delete all classes failed due to some internal server error."))
  }

  res.status(200).json({message: "All classes successfully deleted!"})
})

// ======== Class Schedules ========

app.get("/users/me/class-schedules", withAuth, withUser, async (req: Request, res: Response) => {
  const targetUser: IUserDocumnet = res.locals.targetUser
  res.status(200).json({classSchedules: targetUser.classSchedules})

})

app.post("/users/me/class-schedules", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.targetUser

    targetUser.classSchedules.push({
      classes: req.body.classes,
      name: req.body.name,
      uid: req.body.uid
    })

    await targetUser.save()
  } catch(err) {
    return next(new DatabaseError("Database call to add new class schedule failed due to some internal server error."))
  }

  res.status(200).json({message: "Class schedule successfully added!"})
})

app.put("/users/me/class-schedules/:uid", withAuth, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserModel.findOneAndUpdate(
      { email: res.locals.targetSession.email, "classSchedules.uid": req.params.uid },
      {
        $set: {
          "classSchedules.$": {
            name: req.body.name,
            classes: req.body.classes,
            uid: req.params.uid
          }
        }
      },
      { new: true }
    )

    if (!result) {
      return next(new DatabaseError(`Can't update class schedule with id ${req.params.uid}, most likely because it's not exist`))
    }
    
  } catch(err) {
    return next(new DatabaseError("Database call to edit user's class schedule failed due to some internal server error."))
  }

  res.status(200).json({message: "Class schedule successfully updated!"})
})

app.delete("/users/me/class-schedules/:uid", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.targetUser
    
    const initLength = targetUser.classSchedules.length
    targetUser.classSchedules = targetUser.classSchedules.filter(c => c.uid !== req.params.uid)
    
    if (targetUser.classSchedules.length === initLength) {
      return next(new DatabaseError(`Can't delete class schedule with id ${req.params.uid}, most likely because it's not exist`))
    }

    await targetUser.save()
  } catch(err) {
    return next(new DatabaseError("Database call to delete class schedule failed due to some internal server error."))
  }

  res.status(200).json({message: `Class schedule with id ${req.params.uid} successfully deleted!`})
})
  
// this is just a debug endpoint that will not present in prod version of the app 
app.delete("/users/me/delete-all-class-schedules", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.targetUser
    
    targetUser.classSchedules = []

    await targetUser.save()
  } catch(err) {
    return next(new DatabaseError("Database call to delete all class schedles failed due to some internal server error."))
  }

  res.status(200).json({message: "All class schedules successfully deleted!"})
})

// ======== Assembled Schedules ========

app.get("/users/me/assembled-schedules", withAuth, withUser, async (req: Request, res: Response) => {
  const targetUser: IUserDocumnet = res.locals.targetUser
  res.status(200).json({assembledSchedules: targetUser.assembledSchedules})
})

app.post("/users/me/assembled-schedules", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.targetUser

    targetUser.assembledSchedules.push({
      uid: req.body.uid,
      name: req.body.name,
      days: req.body.days
    })

    await targetUser.save()
  } catch(err) {
    return next(new DatabaseError("Database call to add new assembled schedule failed due to some internal server error."))
  }

  res.status(200).json({message: "Assembled schedule successfully added!"})
})

app.put("/users/me/assembled-schedules/:uid", withAuth, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserModel.findOneAndUpdate(
      { email: res.locals.targetSession.email, "assembledSchedules.uid": req.params.uid },
      {
        $set: {
          "assembledSchedules.$": {
            uid: req.params.uid,
            name: req.body.name,
            days: req.body.days
          }
        }
      },
      { new: true }
    )

    if (!result) {
      return next(new DatabaseError(`Can't update assembled schedule with id ${req.params.uid}, most likely because it's not exist`))
    }
    
  } catch(err) {
    return next(new DatabaseError("Database call to edit user's assembled schedule failed due to some internal server error."))
  }

  res.status(200).json({message: "Assembled schedule successfully updated!"})
})

app.delete("/users/me/assembled-schedules/:uid", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.targetUser
    
    const initLength = targetUser.assembledSchedules.length
    targetUser.assembledSchedules = targetUser.assembledSchedules.filter(c => c.uid !== req.params.uid)
    
    if (targetUser.assembledSchedules.length === initLength) {
      return next(new DatabaseError(`Can't delete assembled schedule with id ${req.params.uid}, most likely because it's not exist`))
    }

    await targetUser.save()
  } catch(err) {
    return next(new DatabaseError("Database call to delete assembled schedule failed due to some internal server error."))
  }

  res.status(200).json({message: `Assembled schedule with id ${req.params.uid} successfully deleted!`})
})
  
// this is just a debug endpoint that will not present in prod version of the app 
app.delete("/users/me/delete-all-assembled-schedules", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.targetUser
    
    targetUser.assembledSchedules = []

    await targetUser.save()
  } catch(err) {
    return next(new DatabaseError("Database call to delete all assembled schedles failed due to some internal server error."))
  }

  res.status(200).json({message: "All assembled schedles successfully deleted!"})
})

// Error Handling Middleware
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  if (Object.getPrototypeOf(err) === UnknownError.prototype) {
    console.error("============ UNKNOWN ERROR ============\n", err.message, "\n===============================")
    return res.status(err.statusCode).json({message: "Internal server error."}).end()
  }

  console.error("============ ERROR ============\n", err.message, "\n===============================")
  res.status(err.statusCode).json({message: err.message})
})
