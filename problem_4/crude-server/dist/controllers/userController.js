import UserService from "../services/userService.js";
import UserCreateRequest from "../dto/request/UserCreateRequest.js";
import { sendResponse } from "../utils/ResponseHandler.js";
import UserResponse from "../dto/response/UserResponse.js";
import UserUpdateRequest from "../dto/request/UserUpdateRequest.js";
import { CustomError } from "../exception/CustomError.js";
class UserController {
    userService = new UserService();
    checkUserExist = async (_req, res, next, id) => {
        try {
            const userId = Number(id);
            if (isNaN(userId)) {
                return next(new CustomError('Invalid user ID', 400));
            }
            const userExists = await this.userService.checkUserExist(userId);
            if (!userExists) {
                return next(new CustomError('User not found', 404));
            }
            next();
        }
        catch (error) {
            next(error);
        }
    };
    createUser = async (req, res, next) => {
        try {
            const userDto = new UserCreateRequest(req.body);
            const user = await this.userService.createUser(userDto);
            return sendResponse(res, 'User created successfully', new UserResponse(user));
        }
        catch (error) {
            next(error);
        }
    };
    getUserDetail = async (req, res, next) => {
        try {
            const user = await this.userService.getUserById(Number(req.params.id));
            return sendResponse(res, "User found", new UserResponse(user), 200);
        }
        catch (error) {
            next(error);
        }
    };
    getAllUsers = async (_req, res, next) => {
        try {
            const users = await this.userService.getAllUsers();
            return sendResponse(res, "Users fetched successfully", users.map(user => new UserResponse(user)), 200);
        }
        catch (error) {
            next(error);
        }
    };
    updateUserDetail = async (req, res, next) => {
        try {
            const userDto = new UserUpdateRequest(req.body);
            const user = await this.userService.updateUser(Number(req.params.id), userDto);
            return sendResponse(res, "User updated successfully", new UserResponse(user), 200);
        }
        catch (error) {
            next(error);
        }
    };
    deleteUser = async (req, res, next) => {
        try {
            await this.userService.deleteUser(Number(req.params.id));
            return sendResponse(res, "Delete user successfully", null, 200);
        }
        catch (error) {
            next(error);
        }
    };
}
export default UserController;
