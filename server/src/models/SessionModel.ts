import mongoose, { InferSchemaType } from "mongoose"

export interface ISessionDocument extends mongoose.Document {
  session_id: string,
  email: string,
  // todo: expiration_date
}

const SessionSchema = new mongoose.Schema({
  session_id: String,
  email: String,
  // todo: expiration_date
})

export type ISession = Required<InferSchemaType<typeof SessionSchema>>

const SessionModel = mongoose.model<ISession>("sessions", SessionSchema)

export default SessionModel
