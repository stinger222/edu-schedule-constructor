
const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const EXPRESS_PORT = process.env.BACKEND_PORT
const MONGO_PORT = process.env.MONGO_PORT

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
})

const UserModel = mongoose.model("users", UserSchema)

app.listen(EXPRESS_PORT, () => {
  mongoose.connect(`mongodb://database/custom_schedule_db`)
  
  console.log(`Server started on port ${EXPRESS_PORT}!!`)
})

app.get("/", async (req, res) => {
  res.json({message: "As you can see, express kinda works"})

})

app.get("/create", async (req, res) => {
  await UserModel.create({
    age: 1,
    name: "name"
  })

  res.json({message: "Created! I beilve..."})
})

app.get("/get", async (req, res) => {
  const x = await UserModel.find()
  res.json(x.map(i => i.toJSON()))
})

