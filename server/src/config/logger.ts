import { warn } from "console";
import winston from "winston"


const logFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
});

// setting up the logger :
const logger = winston.createLogger({
    levels: {
        error: 0,
        warn: 1,
        info: 2,
    },
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize({ all: true, colors: { info: "yellow", error: "red", warn: "green" } }),
        logFormat
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "logs/app.log" }),
    ],
});

// export the created logger : 
export default logger;
