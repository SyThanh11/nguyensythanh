import { Request, Response, NextFunction } from "express";
import UserService from "../services/userService.js";
import UserCreateRequest from "../dto/request/UserCreateRequest.js";
import { sendResponse } from "../utils/ResponseHandler.js";
import UserResponse from "../dto/response/UserResponse.js";
import UserUpdateRequest from "../dto/request/UserUpdateRequest.js";
import { CustomError } from "../exception/CustomError.js";
import { ErrorCode } from "../exception/ErrorCode.js";
import { validate, ValidationError } from "class-validator";
import CustomValidationError from "../exception/CustomValidationError.js";

class UserController {
  private userService = new UserService();

  checkUserExist = async (_req: Request, _res: Response, next: NextFunction, id: string): Promise<void | Response> => {
    try {  
      const userId = Number(id);
      if (isNaN(userId)) {
        return next(new CustomError(ErrorCode.INVALID_USER_ID));
      }

      const userExists = await this.userService.checkUserExist(userId);
      if (!userExists) {        
        return next(new CustomError(ErrorCode.USER_NOT_FOUND));
      }

      next();
    } catch (error) {
      next(error);
    }
  };

  createUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const userDto = new UserCreateRequest(req.body);
  
      // Validate user data
      const validateErrors = await validate(userDto);
      if (validateErrors.length > 0) {
        const errorMessages = validateErrors
          .map((error: ValidationError) => {
            if (error.constraints) {
              return `${error.property} - ${Object.values(error.constraints).join(', ')}`;
            }
            return ''; 
          })
          .filter(message => message !== ''); 
  
        return next(new CustomValidationError(errorMessages.join('; '), 400));
      }

      const emailExists = await this.userService.checkEmailExist(userDto.email);
      if(emailExists){
        return next(new CustomError(ErrorCode.EMAIL_ALREADY_EXISTS));
      }
  
      const user = await this.userService.createUser(userDto);
      return sendResponse(res, 'User created successfully', new UserResponse(user));
    } catch (error) {
      next(error);
    }
  };
  

  getUserDetail = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const user = await this.userService.getUserById(Number(req.params.id));
      return sendResponse(res, "User found", new UserResponse(user!), 200);
    } catch (error) {
      next(error);
    }
  };

  getAllUsers = async (_req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const users = await this.userService.getAllUsers();
      return sendResponse(
        res, 
        "Users fetched successfully", 
        users.map(user => new UserResponse(user)), 
        200
      );
    } catch (error) {
      next(error);
    }
  };

  updateUserDetail = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try { 
      const userDto = new UserUpdateRequest(req.body);

      const validateErrors = await validate(userDto);
      if (validateErrors.length > 0) {
        const errorMessages = validateErrors
          .map((error: ValidationError) => {
            if (error.constraints) {
              return `${error.property} - ${Object.values(error.constraints).join(', ')}`;
            }
            return ''; 
          })
          .filter(message => message !== ''); 
  
        return next(new CustomValidationError(errorMessages.join('; '), 400));
      }

      const existingUser = await this.userService.getUserById(Number(req.params.id));
      if (userDto.email && userDto.email !== existingUser?.email) {
        const emailExists = await this.userService.checkEmailExist(userDto.email);
        if (emailExists) {
          return next(new CustomError(ErrorCode.EMAIL_ALREADY_EXISTS));
        }
      }
      
      const user = await this.userService.updateUser(Number(req.params.id), userDto);
      return sendResponse(res, "User updated successfully", new UserResponse(user), 200);
    } catch (error) {
      next(error);
    }
  };

  deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      await this.userService.deleteUser(Number(req.params.id));
      return sendResponse(res, "Delete user successfully", null, 200);
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
