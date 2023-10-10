import { NextFunction, Request, Response } from "express"
import UnauthorizedError from "../errors/UnauthorizedError"
import SessionModel from "../models/SessionModel"
import { config } from "dotenv"
config()

/**
 * This middleware will check if "session_id" cookie attached to the request and it's not expired
 * 
 * @returns if session is valid, then `res.locals` will contain `targetSession` object
 */
const withAuth = async (req: Request, res: Response, next: NextFunction) => {
  const session_id = req.cookies.session_id

  if (!session_id) {
    return next(new UnauthorizedError("Not Authorized"))
  }

  const targetSession = (await SessionModel.findOne({session_id}))

  if (!targetSession) {
    res.clearCookie("session_id")
    return next(new UnauthorizedError("Not Authorized"))
  }

  res.locals.targetSession = targetSession.toJSON()

  return next()
}

export default withAuth