import { ISession } from "../models/SessionModel"
import { IUserDocumnet } from "../models/UserModel"

export interface MyResponseLocals {
  userSession?: ISession, 
  userDocument?: IUserDocumnet
}