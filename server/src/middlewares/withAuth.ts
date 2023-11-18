import { NextFunction, Request, Response } from "express"
import { default as JWT } from "jsonwebtoken"
import { config } from "dotenv"
config()

import UnauthorizedError from "../errors/UnauthorizedError"
import { MyResponseLocals } from "../types"

/**
 * This middleware will check if authorization header contains valid JWT token.
 * 
 * If not - UnauthorizedError will be thrown
 */
const withAuth = async (req: Request, res: Response<any, MyResponseLocals>, next: NextFunction) => {
  const jwt = req.headers["authorization"]?.split(" ")?.[1]

  if (!jwt) return next(new UnauthorizedError("Authorization header doesn't exist or have invalid value"))

  try {
    const result = await JWT.verify(jwt, process.env.JWT_SECRET) as {login: string, id: string}
    res.locals.userLogin = result.login
    
  } catch (err) {
    return next(new UnauthorizedError("JWT token is malformed"))
  }

  return next()
}

export default withAuth