
import cookieParser from "cookie-parser"
import mongoose, { InferSchemaType }from "mongoose"
import express, { Express, NextFunction, Request, Response } from "express"
const cors = require("cors")
import { config } from "dotenv"
config()

const app: Express = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: "http://localhost:3000"}))

const EXPRESS_PORT = process.env.BACKEND_PORT

const SessionSchema = new mongoose.Schema({
  session_id: String,
  email: String,
  // todo: expiration_date  
})
const SessionModel = mongoose.model("sessions", SessionSchema)

const UserSchema = new mongoose.Schema({
  email: String,
  classes: [{
    title: String,
    teacher: String,
    cabinet: String,
    uid: String
  }],
  classSchedules: [{
    name: String,
    uid: String,
    classes: [{
      start: String,
      end: String
    }]
  }],
  assembledSchedules: [{
    uid: String,
    name: String,
    days: [ {
      classScheduleId: String,
      classIds: [String]
    }]
  }]
})

type IUser = InferSchemaType<typeof UserSchema>
const UserModel = mongoose.model<IUser>("users", UserSchema)


app.listen(EXPRESS_PORT, () => {
  mongoose.connect(`mongodb://database/custom_schedule_db`)
  console.log(`Server started on port ${EXPRESS_PORT}!!`)
})

/**
 * This middleware will check if "session_id" cookie attached to the request is there and not expired
 * 
 * @returns if session is valid, then `res.locals` will contain session object
 */
const withAuth = async (req: Request, res: Response, next: NextFunction) => {
  const session_id = req.cookies.session_id
  
  if (!session_id) {
    res.status(401).json({message: "Not Authorized"})
    return next(new Error("Not Authorized"))
  }

  const targetSession = (await SessionModel.findOne({session_id}))

  if (!targetSession) {
    res.clearCookie("session_id")
    res.status(401).json({message: "Not Authorized"})
    return next(new Error("Not Authorized"))
  }

  res.locals.targetSession = targetSession.toJSON()

  return next()
}

app.get("/", async (req: Request, res: Response) => {
  res.json({m: '122'})

  // await SessionModel.create({
  //   email: "test123", 
  //   session_id: "12dssdgf34"+Math.random() 
  // })

  // const x = await SessionModel.find()
  // await UserModel.create({
  //   classSchedules: [{}]
  // } as IUser)

  // const x = await UserModel.find()

  // res.json(x.map(i => i.toJSON()))
})

app.post("/auth/sign-in", async (req: Request,  res: Response) => {
  console.log("======= NEW LOGIN =======\n", req.body)
  
  // clear session_id cookie in case if user already signed-in
  res.clearCookie("session_id")

  const newSessionId = Math.random().toString()

  try {
    await SessionModel.create({
      session_id: newSessionId,
      email: req.body.email
    })
    
    res.cookie("session_id", newSessionId)
    
    res.status(200).json({
      email: req.body.email
    })
  } catch (err) {
    res.status(500).json({
      message: "Can't create new session due to internal server error."
    })
  }

  // ======= create user in db if he doesn't exist yet =======

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

app.get("/auth/validate-session", withAuth, async (req: Request, res: Response, ) => {
  return res.status(200).json({isSessionValid: true})
})

app.get("/users/me", withAuth, async (req, res) => {
  // TODO: there is no way this user can be null, so if it IS - this is too should be logged and inspected
  const targetUser = await UserModel.findOne({
    email: res.locals.targetSession.email
  })
  
  return res.status(200).json(targetUser.toJSON())
})

app.post("users/me/classes/:id", async (req, res) => {
  
})