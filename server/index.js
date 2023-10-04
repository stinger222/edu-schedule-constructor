
const cookieParser = require('cookie-parser')
const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

const EXPRESS_PORT = process.env.BACKEND_PORT

app.listen(EXPRESS_PORT, () => {
  // mongoose.connect(`mongodb://database/custom_schedule_db`)
  console.log(`Server started on port ${EXPRESS_PORT}!!`)
})

app.get("/", async (req,  res) => {
  res.json({message: "123"})
})

app.post("/auth/sign-in", async (req,  res) => {
  console.log("======= NEW LOGIN =======\n", req.body)
  
  // clear session_id cookie in case if user already signed-in
  res.clearCookie("session_id")

  const newSessionId = Math.random()
  await fetch("http://localhost:3003/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: req.body.email,
      session_id: newSessionId+"",
      epires_in: 2981342
    })
  })

  res.cookie("session_id", newSessionId)

  res.status(200).json({
    email: req.body.email
  })
})

app.get("/auth/get-session", async (req, res) => {
  const session_id = req.cookies.session_id

  if (!session_id) {
    res.status(401).end()
    return
  }

  const sessions = await (await fetch("http://localhost:3003/sessions")).json()

  const targetSession = sessions.find(s => {
    return s.session_id === session_id
  })
  
  if (!targetSession) {
    res.clearCookie("session_id")
    res.status(401).end()
    return
  }

  res.status(200).json({email: targetSession.email})
})

