import { ErrorCode, ErrorDetails } from "./ErrorCode.js";

export class CustomError extends Error {
  statusCode: number;
  errorCode: ErrorCode;
  details?: string;

  constructor(errorCode: ErrorCode, details?: string) {
    const { message, statusCode } = ErrorDetails[errorCode];
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    this.errorCode = errorCode;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}
