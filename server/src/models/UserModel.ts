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

export type IUser = InferSchemaType<typeof UserSchema>

const UserModel = mongoose.model<IUser>("users", UserSchema)

export default UserModel