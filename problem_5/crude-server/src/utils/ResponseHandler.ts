// src/utils/ResponseHandler.ts
import { Response } from "express";
import ApiResponse from "../dto/response/ApiResponse.js";

/**
 * Hàm trả về response chuẩn hóa
 * @param res Response object
 * @param message Thông báo kèm theo
 * @param data Dữ liệu trả về (có thể không có)
 * @param statusCode HTTP status code (default là 200)
 */
export const sendResponse = <T>(
  res: Response,
  message: string,
  data?: T | null,
  statusCode: number = 200
): Response => {
  let status: 'success' | 'fail';
  if (statusCode >= 400 && statusCode <= 500) {
    status = 'fail';
  } else {
    status = 'success';
  }

  if (data === null) {
    data = {} as T; 
  }

  return res.status(statusCode).json(new ApiResponse(status, message, data));
};
