import { NextFunction, Request, Response } from "express"
import UnauthorizedError from "../errors/UnauthorizedError"
import SessionModel, { ISession, ISessionDocument } from "../models/SessionModel"
import { config } from "dotenv"
import { MyResponseLocals } from "../types"
config()

/**
 * This middleware will check if "session_id" cookie attached to the request and it's not expired
 * 
 * @returns if session is valid, then `res.locals` will contain `userSession` object
 */
const withAuth = async (req: Request, res: Response<any, MyResponseLocals>, next: NextFunction) => {
  const session_id = req.cookies.session_id

  if (!session_id) {
    return next(new UnauthorizedError("Not Authorized"))
  }

  const userSession: ISessionDocument | null = await SessionModel.findOne({session_id})

  if (!userSession) {
    res.clearCookie("session_id")
    return next(new UnauthorizedError("Not Authorized"))
  }
  
  const isSessionExpired = Date.now() > new Date(userSession.toObject<ISession>()?.expiration_date).getTime()
  if (isSessionExpired) return next(new UnauthorizedError("Session expired"))

  res.locals.userSession = userSession.toObject()
  return next()
}

export default withAuth