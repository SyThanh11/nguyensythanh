import { ErrorDetails } from "./ErrorCode.js";
export class CustomError extends Error {
    statusCode;
    errorCode;
    details;
    constructor(errorCode, details) {
        const { message, statusCode } = ErrorDetails[errorCode];
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        this.errorCode = errorCode;
        this.details = details;
        Error.captureStackTrace(this, this.constructor);
    }
}
