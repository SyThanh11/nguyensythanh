export var ErrorCode;
(function (ErrorCode) {
    ErrorCode["USER_NOT_FOUND"] = "USER_NOT_FOUND";
    ErrorCode["INVALID_USER_ID"] = "INVALID_USER_ID";
    ErrorCode["EMAIL_ALREADY_EXISTS"] = "EMAIL_ALREADY_EXISTS";
    ErrorCode["PASSWORD_TOO_SHORT"] = "PASSWORD_TOO_SHORT";
    ErrorCode["INVALID_EMAIL_FORMAT"] = "INVALID_EMAIL_FORMAT";
    ErrorCode["UNAUTHORIZED_ACCESS"] = "UNAUTHORIZED_ACCESS";
    ErrorCode["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
    ErrorCode["INVALID_DATA"] = "INVALID_DATA";
    ErrorCode["UNEXPECTED_ERROR"] = "UNEXPECTED_ERROR";
    ErrorCode["URL_NOT_FOUND"] = "URL_NOT_FOUND";
})(ErrorCode || (ErrorCode = {}));
export const ErrorDetails = {
    [ErrorCode.USER_NOT_FOUND]: {
        message: 'User not found',
        statusCode: 404,
    },
    [ErrorCode.INVALID_USER_ID]: {
        message: 'Invalid user ID',
        statusCode: 400,
    },
    [ErrorCode.EMAIL_ALREADY_EXISTS]: {
        message: 'Email already exists',
        statusCode: 400,
    },
    [ErrorCode.PASSWORD_TOO_SHORT]: {
        message: 'Password must be at least 6 characters long',
        statusCode: 400,
    },
    [ErrorCode.INVALID_EMAIL_FORMAT]: {
        message: 'Email format is invalid',
        statusCode: 400,
    },
    [ErrorCode.UNAUTHORIZED_ACCESS]: {
        message: 'Unauthorized access',
        statusCode: 401,
    },
    [ErrorCode.INTERNAL_SERVER_ERROR]: {
        message: 'Internal server error',
        statusCode: 500,
    },
    [ErrorCode.INVALID_DATA]: {
        message: 'Invalid data provided',
        statusCode: 422,
    },
    [ErrorCode.UNEXPECTED_ERROR]: {
        message: 'Unexpected error occurred',
        statusCode: 500,
    },
    [ErrorCode.URL_NOT_FOUND]: {
        message: 'The requested URL was not found on the server',
        statusCode: 404,
    },
};
