import cookieParser from "cookie-parser"
import { config } from "dotenv"
import express, { Express, NextFunction, Request, Response } from "express"
import mongoose, { InferSchemaType } from "mongoose"
import CustomError from "./src/errors/CustomError"
import withAuth from "./src/middlewares/withAuth"
import UserModel, { IUser } from "./src/models/UserModel"
import SessionModel from "./src/models/SessionModel"
import DatabaseError from "./src/errors/DatabaseError"
const cors = require("cors")
config()

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
    next(new DatabaseError("Can't create new session due to internal server error."))
  }

  // ======= create user in db if he doesn't exist yet: =======

  const user: IUser | null = await UserModel.findOne({email: req.body.email})

  if (user) return

  // TODO: if this will fail (somehow), then this is should defentetly be logged and inspected
  UserModel.create({
    email: req.body.email,
    classes: [],
    classSchedules: [],
    assembledSchedules: []
  } as IUser)
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

app.put("/users/me/classes/:uid", withAuth, async (req: Request, res: Response, next: NextFunction) => {
  // TODO: again, if this user will be null, it means I fucked up SOOO badly
  try {
    await UserModel.findOneAndUpdate(
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
  } catch(err) {
    next(new DatabaseError("Database call to edit user's classes failed due to some internal server error."))
  }

  res.status(200).json({message: "Class successfully updated!"})
})

app.post("/users/me/classes", withAuth, async (req: Request, res: Response, next: NextFunction) => {
  // TODO: again: if this user will be null, it means I fucked up SOOO badly (should be logged)
  try {
    const targetUser = await UserModel.findOne({email: res.locals.targetSession.email})
    
    targetUser.classes.push({
      title: req.body.title, 
      teacher: req.body.teacher,
      cabinet: req.body.cabinet,
      uid: req.body.uid
    })

    await targetUser.save()
  } catch(err) {
    next(new DatabaseError("Database call to add new class failed due to some internal server error."))
  }

  res.status(200).json({message: "Class successfully added!"})
})

// this is just a debug endpoint that will not present in prod version of the app 
app.delete("/users/me/delete-all-classes", withAuth, async (req: Request, res: Response, next: NextFunction) => {
  // TODO: again: if this user will be null, it means I fucked up SOOO badly (should be logged)
  try {
    const targetUser = await UserModel.findOne({email: res.locals.targetSession.email})
    
    targetUser.classes = []

    await targetUser.save()
  } catch(err) {
    next(new DatabaseError("Database call to delete all classes failed due to some internal server error."))
  }

  res.status(200).json({message: "All classes successfully deleted!"})
})

app.delete("/users/me/classes/:uid", withAuth, async (req: Request, res: Response, next: NextFunction) => {
  // TODO: again: if this user will be null, it means I fucked up SOOO badly (should be logged)
  try {
    const targetUser = await UserModel.findOne({email: res.locals.targetSession.email})
    
    targetUser.classes = targetUser.classes.filter(c => c.uid !== req.params.uid)

    await targetUser.save()
  } catch(err) {
    next(new DatabaseError("Database call to delete class failed due to some internal server error."))
  }

  res.status(200).json({message: `Class with id ${req.params.uid} successfully deleted!`})
})

app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  console.error("============ ERROR ============\n", err.message, "\n===============================")
  res.status(err.statusCode).json({message: err.message})
})
