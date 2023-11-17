import { NextFunction, Request, Response } from "express"
import UnknownError from "../errors/UnknownError"
import UserModel, { IUserDocumnet } from "../models/UserModel"
import { MyResponseLocals } from "../types"

/**
 * This middleware should be used after withAuth middleware, to take `res.locals.userEmail` and fetch user from db
 * 
 * @returns if everything ok, then `res.locals.userDocument` will contain userDocument (NOT JUST PLANE OBJECT, but mongoose Document)
 */
const withUser = async (req: Request, res: Response<any, MyResponseLocals>, next: NextFunction) => {
  const userEmail = res.locals.userEmail
  
  if (!userEmail) {
    return next(new UnknownError("withUser middleware: For some reason, 'res.locals.userSession' is undefined"))
  }

  try {
    const user: IUserDocumnet | null = await UserModel.findOne({email: userEmail})
    if (!user) {
      return next(new UnknownError(`======================================================================
      withUser middleware: Not sure how, but can't find user in db by email that was stored in *VALID* JWT.
      Auth header: "${req.headers.authorization}"
      Result of parsing JWT: "${userEmail}"
      ======================================================================`))
    }

    res.locals.userDocument = user
    next()
  } catch(err) {
    return next(new UnknownError("Unknown error ocurred in the 'withUser' middleware, I believe db died or something"))
  }
}

export default withUser