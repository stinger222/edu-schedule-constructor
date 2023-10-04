
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()
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

app.listen(EXPRESS_PORT, () => {
  mongoose.connect(`mongodb://database/custom_schedule_db`)
  console.log(`Server started on port ${EXPRESS_PORT}!!`)
})

app.get("/", async (req,  res) => {
  await SessionModel.create({
    email: "test123",
    session_id: "12dssdgf34"+Math.random()
  })

  const x = await SessionModel.find()

  res.json(x.map(i => i.toJSON()))
})



app.post("/auth/sign-in", async (req,  res) => {
  console.log("======= NEW LOGIN =======\n", req.body)
  
  // clear session_id cookie in case if user already signed-in
  res.clearCookie("session_id")

  const newSessionId = "hjkdsfsd" + Math.random() + "iurqwe"

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
})

app.get("/auth/get-session", async (req, res) => {
  const session_id = req.cookies.session_id

  if (!session_id) {
    res.status(401).end()
    return
  }

  const targetSession = (await SessionModel.findOne({session_id}))?.toJSON()
  console.log("target session:\n", targetSession)
  
  if (!targetSession) {
    res.clearCookie("session_id")
    res.status(401).end()
    return
  }

  res.status(200).json({email: targetSession.email})
})

