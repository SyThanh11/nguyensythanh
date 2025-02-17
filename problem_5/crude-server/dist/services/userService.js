import UserModel from "../models/user.model.js";
class UserService {
    userModel = new UserModel();
    createUser = async (user) => {
        return await this.userModel.create(user);
    };
    getUserById = async (id) => {
        return await this.userModel.findById(id);
    };
    getAllUsers = async () => {
        return await this.userModel.findAll();
    };
    updateUser = async (id, updatedUser) => {
        return await this.userModel.update(id, updatedUser);
    };
    deleteUser = async (id) => {
        return await this.userModel.delete(id);
    };
    checkUserExist = async (id) => {
        const user = await this.userModel.findById(id);
        return user !== null;
    };
}
export default UserService;
