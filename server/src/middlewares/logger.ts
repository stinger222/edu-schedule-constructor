import expressWinston from "express-winston"
import loggerInstance from "../logger/logger"

const ignoreRoutes = [
  "/auth/validate-token",
]

const ignoreMethods = [
  "OPTIONS"
]

const loggerMiddleware = expressWinston.logger({
  winstonInstance: loggerInstance,

  metaField: null,
  requestField: null,
  responseWhitelist: ["statusCode", "displayMessage"],
  msg: "HTTP {{req.method}} {{req.url}}",
  expressFormat: false,
  colorize: false,
  dynamicMeta: (req, res) => {
    const jwt = req.headers["authorization"]?.split(" ")?.[1]
    
    return {
      userJWT: jwt
    }
  },
  ignoreRoute: (req, res) => ignoreRoutes.includes(req.url) || ignoreMethods.includes(req.method),
  statusLevels: true
})

export default loggerMiddleware