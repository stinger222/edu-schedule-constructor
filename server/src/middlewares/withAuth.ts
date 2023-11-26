import { NextFunction, Request, Response } from "express"
import { default as JWT } from "jsonwebtoken"
import { config } from "dotenv"
config()

import UnauthorizedError from "../errors/UnauthorizedError"
import UnknownError from "../errors/UnknownError"

import { MyResponseLocals } from "../types"
import UserModel, { IUserDocumnet } from "../models/UserModel"

/**
 * This middleware will take Authorization header from auth and verify JWT inside it.
 * 
 * If it's valid, the `res.locals.userDocumet` and `res.locals.userLogin` variables will be assigned
 */
const withAuth = async (req: Request, res: Response<any, MyResponseLocals>, next: NextFunction) => {
  const jwt = req.headers["authorization"]?.split(" ")?.[1]
  if (!jwt) return next(new UnauthorizedError("Authorization header doesn't exist or have invalid value"))
  
  try {
    const userLogin = (await JWT.verify(jwt, process.env.JWT_SECRET!) as { login: string, id: string }).login
    if (!userLogin) {
      return next(new UnknownError("For some reason there is no 'login' property in the parsed JWT"))
    }

    res.locals.userLogin = userLogin
  } catch (err) {
    return next(new UnauthorizedError("JWT token is malformed"))
  }

  try {
    const userLogin = res.locals.userLogin
    
    const user: IUserDocumnet | null = await UserModel.findOne({ login: userLogin })
    if (!user) {
      return next(new UnknownError(`======================================================================
      Not sure how, but can't find user in db by login that was stored in *VALID* JWT.
      Auth header: "${req.headers.authorization}"
      Result of parsing JWT: "${userLogin}"
      ======================================================================`))
    }

    res.locals.userDocument = user
    return next()
  } catch (err) {
    return next(new UnknownError("Unknown error ocurred in the 'withUser' middleware, I believe db died or something"))
  }
}

export default withAuth