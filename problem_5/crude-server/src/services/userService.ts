import UserCreateRequest from "../dto/request/UserCreateRequest.js";
import UserUpdateRequest from "../dto/request/UserUpdateRequest.js";
import { IUser } from "../interface/user.interface.js";
import UserModel from "../models/user.model.js";
import { hashPassword } from "../utils/hashUtils.js";

class UserService {
    private userModel = new UserModel();

    createUser = async (user: UserCreateRequest): Promise<IUser> => {
        user.password = hashPassword(user.password);
        return await this.userModel.create(user);
    }

    getUserById = async (id: number): Promise<IUser | null> => {
        return await this.userModel.findById(id);
    }

    getAllUsers = async (): Promise<IUser[]> => {
        return await this.userModel.findAll();
    }

    updateUser = async (id: number, updatedUser: UserUpdateRequest): Promise<IUser> => {
        return await this.userModel.update(id, updatedUser);
    }

    deleteUser = async (id: number): Promise<IUser> => {
        return await this.userModel.delete(id);
    }

    checkUserExist = async (id: number): Promise<boolean> => {
        return await this.userModel.existsById(id);
    };

    checkEmailExist = async (email: string): Promise<boolean> => {
        return await this.userModel.existsByEmail(email);
    }
}

export default UserService;
