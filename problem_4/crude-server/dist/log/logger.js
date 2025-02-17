import winston from 'winston';
const logFormat = winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} ${level}: ${message}`;
});
const logger = winston.createLogger({
    level: 'info', // Default log level
    format: winston.format.combine(winston.format.timestamp(), logFormat),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'log/index.log' })
    ],
});
export default logger;
