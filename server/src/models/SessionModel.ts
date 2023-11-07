import mongoose, { InferSchemaType } from "mongoose"

export interface ISessionDocument extends mongoose.Document {
  session_id: string,
  email: string,
  // todo: expiration_date
}

const SessionSchema = new mongoose.Schema({
  session_id: String,
  email: String,
  expiration_date: {
    type: Date,
    default: () => Date.now() + 1000*60*60*24*15 // 15d
    // default: () => Date.now() + 1000*60*20 // 20m
  }
})

export type ISession = Required<InferSchemaType<typeof SessionSchema>>

const SessionModel = mongoose.model<ISession>("sessions", SessionSchema)

export default SessionModel
