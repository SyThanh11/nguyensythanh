import UserModel from "../models/user.model.js";
class UserService {
    userModel = new UserModel();
    async createUser(user) {
        console.log("Hello");
        console.log(user);
        return await this.userModel.create(user);
    }
    async getUserById(id) {
        return await this.userModel.findById(id);
    }
    async getAllUsers() {
        return await this.userModel.findAll();
    }
    async updateUser(id, updatedUser) {
        return await this.userModel.update(id, updatedUser);
    }
    async deleteUser(id) {
        return await this.userModel.delete(id);
    }
}
export default UserService;
