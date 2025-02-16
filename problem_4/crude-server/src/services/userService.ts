import { IUser } from "../interface/user.interface.js";
import UserModel from "../models/user.model.js";

class UserService {
    private userModel = new UserModel();

    createUser = async (user: IUser) => {
        return await this.userModel.create(user);
    }

    getUserById = async (id: number) => {
        return await this.userModel.findById(id);
    }

    getAllUsers = async () => {
        return await this.userModel.findAll();
    }

    updateUser = async (id: number, updatedUser: IUser) => {
        return await this.userModel.update(id, updatedUser);
    }

    deleteUser = async (id: number) => {
        return await this.userModel.delete(id);
    }
}

export default UserService;