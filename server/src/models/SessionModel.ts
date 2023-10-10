import mongoose from "mongoose"

const SessionSchema = new mongoose.Schema({
  session_id: String,
  email: String,
  // todo: expiration_date
})
const SessionModel = mongoose.model("sessions", SessionSchema)

export default SessionModel