import moment from "moment-timezone"
import winston from "winston"

const debugFormat = winston.format.printf((info) => {
  return info.level === "debug" ? `[${info.timestamp}] ${info.message}` : ""
})

const loggerInstance = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: () => moment().tz("Europe/Moscow").format("YYYY-MM-DD HH:mm:ss") }),
    winston.format.json(),
    winston.format.prettyPrint(),
  ),
  transports: [
    new winston.transports.Console({ level: "debug", format: debugFormat }),
    new winston.transports.File({ filename: './logs/info.log', level: "info" }),
    new winston.transports.File({ filename: './logs/errors.log', level: "error" }), 
  ]
})

export default loggerInstance