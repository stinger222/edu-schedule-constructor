import { NextFunction, Request, Response } from "express"
import UnknownError from "../errors/UnknownError"
import UserModel, { IUserDocumnet } from "../models/UserModel"
import { MyResponseLocals } from "../types"

/**
 * This middleware should be used after withAuth middleware, to take `res.locals.userSession` and fetch user from db
 * 
 * @returns if everything ok, then `res.locals.userDocument` will be added (NOT JUST PLANE OBJECT!! but mongoose Document)
 */
const withUser = async (req: Request, res: Response<any, MyResponseLocals>, next: NextFunction) => {
  const session = res.locals.userSession
  if (!session || !session.email) {
    return next(new UnknownError("wtf? how? For some reason, 'res.locals.userSession' or it's 'email' field is undefined (and I'm not even sure if this is possible if it was used after 'withAuth' middleware"))
  }

  try {
    const user: IUserDocumnet | null = await UserModel.findOne({email: session.email})
    if (!user) {
      return next(new UnknownError("HOW? can't find user by email written in the session (AND SESSION *IS* THERE "))
    }

    res.locals.userDocument = user
    next()
  } catch(err) {
    return next(new UnknownError("Error ocurred in the 'withUser' middleware, I believe db died or something"))
  }
}

export default withUser