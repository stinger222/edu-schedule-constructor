import mongoose, { InferSchemaType } from "mongoose"

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