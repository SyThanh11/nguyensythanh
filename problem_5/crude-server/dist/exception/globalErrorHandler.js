import { CustomError } from './CustomError.js';
import { sendResponse } from '../utils/ResponseHandler.js';
import logger from '../log/logger.js';
import CustomValidationError from './CustomValidationError.js';
const errorHandler = (err, _req, res, _next) => {
    if (err instanceof CustomError) {
        logger.error(`Custom Error: ${err.message}, StatusCode: ${err.statusCode}`);
        return sendResponse(res, err.message, null, err.statusCode);
    }
    if (err instanceof CustomValidationError) {
        logger.error(`Validation Error: ${err.message},StatusCode: ${err.statusCode}`);
        return sendResponse(res, err.message, null, 422);
    }
    logger.error(`Server Error: ${err.message}`);
    return sendResponse(res, "Internal server fail!", null, 500);
};
export default errorHandler;
