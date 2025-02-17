import ApiResponse from "../dto/response/ApiResponse.js";
/**
 * Hàm trả về response chuẩn hóa
 * @param res Response object
 * @param message Thông báo kèm theo
 * @param data Dữ liệu trả về (có thể không có)
 * @param statusCode HTTP status code (default là 200)
 */
export const sendResponse = (res, message, data, statusCode = 200) => {
    let status;
    if (statusCode >= 400 && statusCode <= 500) {
        status = 'fail';
    }
    else {
        status = 'success';
    }
    if (data === null) {
        data = {};
    }
    return res.status(statusCode).json(new ApiResponse(status, message, data));
};
