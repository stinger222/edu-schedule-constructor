import { NextFunction, Request, Response } from "express"
import UnknownError from "../errors/UnknownError"
import UserModel from "../models/UserModel"

/**
 * This middleware should be used after withAuth middleware, to take `res.locals.targetSession` and fetch user from db
 * 
 * @returns if everything ok, then `res.locals.targetUser` will be added (NOT JSON)
 */
const withUser = async (req: Request, res: Response, next: NextFunction) => {
  const session = res.locals.targetSession
  if (!session || !session.email) {
    next(new UnknownError("wtf? how? For some reason, 'res.locals.targetSession' or it's 'email' field is undefined (and I'm not even sure if this is possible if it was used after 'withAuth' middleware"))
  }

  try {
    const targetUser = await UserModel.findOne({email: session.email})
    if (!targetUser) {
      next(new UnknownError("HOW? can't find user by email written in the session (AND SESSION *IS* THERE "))
    }

    // NOT JOSN btw(!)
    res.locals.targetUser = targetUser
    next()
  } catch(err) {
    next(new UnknownError("Error ocurred in the 'withUser' middleware, I believe db died or something"))
  }
}

export default withUser