import mongoose, { InferSchemaType } from "mongoose"

export interface IUserDocumnet extends mongoose.Document {
  email: string,
  classes: {
    title: string,
    teacher: string,
    cabinet: string,
    uid: string
  }[],
  classSchedules: {
    name: string,
    uid: string,
    classes: {
      start: string,
      end: string
    }[]
  }[],
  assembledSchedules: {
    uid: string,
    name: string,
    days: {
      classScheduleId: string,
      classIds: string[]
    }[]
  }[]
}

const UserSchema = new mongoose.Schema({
  login: String,
  passwordHash: String,
  classes: [{
    _id: false,
    title: String,
    teacher: String,
    cabinet: String,
    uid: String
  }],
  classSchedules: [{
    _id: false,
    name: String,
    uid: String,
    classes: [{
      _id: false,
      start: String,
      end: String
    }]
  }],
  assembledSchedules: [{
    _id: false,
    uid: String,
    name: String,
    days: [{
      _id: false,
      classScheduleId: String,
      classIds: [String]
    }]
  }]
})

export type IUser = Required<InferSchemaType<typeof UserSchema>>

const UserModel = mongoose.model<IUser>("users", UserSchema)

export default UserModel
