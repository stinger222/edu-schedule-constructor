import express, { Express, Response as ExpressResponse, NextFunction, Request } from "express"
import { default as JWT } from "jsonwebtoken"
import cors from "cors"
import bcrypt from "bcryptjs"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import { config } from "dotenv"
config()

import { MyResponseLocals } from "./src/types"
import UserModel, { IUserDocumnet } from "./src/models/UserModel"
import withAuth from "./src/middlewares/withAuth"
import withUser from "./src/middlewares/withUser"
import UnauthorizedError from "./src/errors/UnauthorizedError"
import DatabaseError from "./src/errors/DatabaseError"
import CustomError from "./src/errors/CustomError"
import AuthError from "./src/errors/AuthError"

type Response = ExpressResponse<any, MyResponseLocals>

const app: Express = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({ credentials: true, origin: process.env.ACCESS_ALLOW_ORIGIN.split(", ")}))

const PORT = process.env.BACKEND_PORT
app.listen(PORT, () => {
  mongoose.connect(process.env.MONGO_URI)
  console.log(`Server started on port ${PORT}!!`)
})

app.get("/", async (req: Request, res: Response) => {
  res.json({ displayMessage: "Hi there!" })
})

// ======== Auth-related ========

app.post("/auth/register", async (req: Request,  res: Response, next: NextFunction) => {
  console.log("======= NEW REGISTER ATTEMPT =======\n", req.body, "\n======================")
  
  const login = req.body?.login  // TODO: move to withAuthCredentials to check that unsername and password are there
  const password = req.body?.password
  
  if (!login || !password) return next(new UnauthorizedError("Login or password is missing", true))

  const user = await UserModel.findOne({ login })
  if (user) return next(new AuthError("User already exists", true))

  const passwordHash = bcrypt.hashSync(password)

  try {
    const createdUser = (await UserModel.create({
      login,
      passwordHash,
      classes: [],
      classSchedules: [],
      assembledSchedules: []
    })).toObject()

    const jwtToken = JWT.sign(
      {login: createdUser.login, id: createdUser._id},
      process.env.JWT_SECRET
    )

    return res.json({ jwt: jwtToken, displayMessage: "Welcome!" })
  } catch(err) {
    return next(new DatabaseError("Can't create user in the db", true))
  }
})

app.post("/auth/login", async (req: Request,  res: Response, next: NextFunction) => {
  console.log("======= NEW LOGIN ATTEMPT =======\n", req.body, "\n======================")

  const login = req.body?.login // TODO: move to withAuthCredentials to check that unsername and password are there
  const password = req.body?.password

  if (!login || !password) return next(new UnauthorizedError("Login or password is missing", true))

  const user = await UserModel.findOne({ login })
  if (!user) return next(new AuthError("User with such login doesn't exist", true))
  
  const isMatch = bcrypt.compareSync(password, user.toObject().passwordHash)
  if (!isMatch) return next(new AuthError("Invalid password", true))

  const jwtToken = JWT.sign(
    {login: user.login, id: user._id},
    process.env.JWT_SECRET
  )

  return res.json({ jwt: jwtToken, displayMessage: "Welcome Back!"})
})

app.get("/auth/validate-token", withAuth, async (req: Request, res: Response) => {
  return res.status(200).json({isSessionValid: true})
})

app.get("/users/me", withAuth, withUser, async (req: Request, res: Response) => {
  return res.status(200).json(res.locals.userDocument.toJSON())
})

// ======== Classes ========

app.get("/users/me/classes", withAuth, withUser, async (req: Request, res: Response) => {
  const targetUser: IUserDocumnet = res.locals.userDocument
  return res.status(200).json({
    classes: targetUser.classes
  })
})

app.post("/users/me/classes", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.userDocument
    const newClass = {
      title: req.body.title, 
      teacher: req.body.teacher,
      cabinet: req.body.cabinet,
      uid: req.body.uid
    }
    
    targetUser.classes.push(newClass)
    await targetUser.save()
    
    console.log("======== Class Added ========\n", newClass, "\n=============================")

    return res.status(200).json({
      classes: targetUser.classes,
      displayMessage: "Card successfully created!"
    })
  } catch(err) {
    return next(new DatabaseError("Database call to add new class failed due to some internal server error", true))
  }
})

app.put("/users/me/classes/:uid", withAuth, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { login: res.locals.userLogin, "classes.uid": req.params.uid },
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
      return next(new DatabaseError(`Can't update class with id "${req.params.uid}", most likely because it's not exist`, true))
    }

    console.log("======== Class Updated ========")

    return res.status(200).json({
      classes: updatedUser.toJSON().classes,
      displayMessage: "Card successfully edited!"
    })
  } catch(err) {
    return next(new DatabaseError("Database call to edit user's class failed due to some internal server error", true))
  }
})

app.delete("/users/me/classes/:uid", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.userDocument

    const initLength = targetUser.classes.length
    targetUser.classes = targetUser.classes.filter(c => c.uid !== req.params.uid)

    if (targetUser.classes.length === initLength) {
      return next(new DatabaseError(`Can't delete class with id "${req.params.uid}", most likely because it's not exist`, true))
    }

    await targetUser.save()

    console.log("======== Class Deleted ========")

    return res.status(200).json({
      classes: targetUser.classes,
      displayMessage: "Card successfully deleted!"
    })
  } catch(err) {
    return next(new DatabaseError("Database call to delete class failed due to some internal server error", true))
  }
})

app.delete("/users/me/delete-all-classes", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.userDocument
    
    targetUser.classes = []

    await targetUser.save()
  } catch(err) {
    return next(new DatabaseError("Database call to delete all classes failed due to some internal server error", true))
  }

  return res.status(200).json({displayMessage: "All classes successfully deleted!"})
})

// ======== Class Schedules ========

app.get("/users/me/class-schedules", withAuth, withUser, async (req: Request, res: Response) => {
  const targetUser: IUserDocumnet = res.locals.userDocument.toJSON()
  return res.status(200).json({
    classSchedules: targetUser.classSchedules
  })
})

app.post("/users/me/class-schedules", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.userDocument

    targetUser.classSchedules.push({
      classes: req.body.classes,
      name: req.body.name,
      uid: req.body.uid
    })

    await targetUser.save()

    console.log("======= Class Schedule Added =========")

    return res.status(200).json({
      classSchedules: targetUser.classSchedules,
      displayMessage: "Card successfully created!"
    })
  } catch(err) {
    return next(new DatabaseError("Database call to add new class schedule failed due to some internal server error", true))
  }
})

app.put("/users/me/class-schedules/:uid", withAuth, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserModel.findOneAndUpdate(
      { login: res.locals.userLogin, "classSchedules.uid": req.params.uid },
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
      return next(new DatabaseError(`Can't update class schedule with id "${req.params.uid}", most likely because it's not exist`, true))
    }
    
    console.log("======= Class Schedule Updated =======")

    return res.status(200).json({
      classSchedules: result.classSchedules,
      displayMessage: "Card successfully edited!"
    })
  } catch(err) {
    return next(new DatabaseError("Database call to edit user's class schedule failed due to some internal server error", true))
  }

})

app.delete("/users/me/class-schedules/:uid", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.userDocument
    
    const initLength = targetUser.classSchedules.length
    targetUser.classSchedules = targetUser.classSchedules.filter(c => c.uid !== req.params.uid)
    
    if (targetUser.classSchedules.length === initLength) {
      return next(new DatabaseError(`Can't delete class schedule with id ${req.params.uid}, most likely because it's not exist`, true))
    }

    await targetUser.save()

    console.log("======= Class Schedule Removed =======")

    return res.status(200).json({
      classSchedules: targetUser.classSchedules,
      displayMessage: "Card successfully deleted!"
    })
  } catch(err) {
    return next(new DatabaseError("Database call to delete class schedule failed due to some internal server error", true))
  }
})
  
app.delete("/users/me/delete-all-class-schedules", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.userDocument
    
    targetUser.classSchedules = []

    await targetUser.save()
  } catch(err) {
    return next(new DatabaseError("Database call to delete all class schedles failed due to some internal server error", true))
  }

  return res.status(200).json({displayMessage: "All class schedules successfully deleted!"})
})

// ======== Assembled Schedules ========

app.get("/users/me/assembled-schedules", withAuth, withUser, async (req: Request, res: Response) => {
  const targetUser: IUserDocumnet = res.locals.userDocument
  return res.status(200).json({
    assembledSchedules: targetUser.assembledSchedules
  })
})

app.post("/users/me/assembled-schedules", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.userDocument

    targetUser.assembledSchedules.push({
      uid: req.body.uid,
      name: req.body.name,
      days: req.body.days
    })

    await targetUser.save()

    console.log("======= Assembled Schedule Added =======")

    return res.status(200).json({
      assembledSchedules: targetUser.assembledSchedules,
      displayMessage: "Card successfully created!"
    })
  } catch(err) {
    return next(new DatabaseError("Database call to add new assembled schedule failed due to some internal server error", true))
  }
})

app.put("/users/me/assembled-schedules/:uid", withAuth, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserModel.findOneAndUpdate(
      { login: res.locals.userLogin, "assembledSchedules.uid": req.params.uid },
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
      return next(new DatabaseError(`Can't update assembled schedule with id "${req.params.uid}", most likely because it's not exist`, true))
    }
    
    console.log("======= Assembled Schedule Updated =======")

    return res.status(200).json({
      assembledSchedules: result.assembledSchedules,
      displayMessage: "Card successfully edited!"
    })
  } catch(err) {
    return next(new DatabaseError("Database call to edit user's assembled schedule failed due to some internal server error", true))
  }
})

app.delete("/users/me/assembled-schedules/:uid", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.userDocument
    
    const initLength = targetUser.assembledSchedules.length
    targetUser.assembledSchedules = targetUser.assembledSchedules.filter(c => c.uid !== req.params.uid)
    
    if (targetUser.assembledSchedules.length === initLength) {
      return next(new DatabaseError(`Can't delete assembled schedule with id ${req.params.uid}, most likely because it's not exist`, true))
    }
    
    await targetUser.save()

    console.log("======= Assembled Schedule Deleted =======")

    return res.status(200).json({
      assembledSchedules: targetUser.assembledSchedules,
      displayMessage: "Card successfully deleted!"
    })
  } catch(err) {
    return next(new DatabaseError("Database call to delete assembled schedule failed due to some internal server error", true))
  }
})
  
app.delete("/users/me/delete-all-assembled-schedules", withAuth, withUser, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const targetUser: IUserDocumnet = res.locals.userDocument
    
    targetUser.assembledSchedules = []

    await targetUser.save()
  } catch(err) {
    return next(new DatabaseError("Database call to delete all assembled schedles failed due to some internal server error", true))
  }

  return res.status(200).json({ displayMessage: "All assembled schedles successfully deleted!" })
})

// Error Handling Middleware
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  if (Object.getPrototypeOf(err) !== UnauthorizedError.prototype) {
    console.error("============ ERROR ============\n", err.message, "\n===============================")
  }

  if (err.notifyUser) {
    return res.status(err.statusCode).json({ displayMessage: err.message })
  }
  
  return res.status(err.statusCode).end()
})
