import UserService from "../services/userService.js";
class UserController {
    userService = new UserService();
    async createUser(req, res) {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(201).json(user);
        }
        catch (error) {
            res.status(500).json({ message: "Error creating user", error });
        }
    }
    async getUserDetail(req, res) {
        try {
            const user = await this.userService.getUserById(Number(req.params.id));
            if (!user)
                return res.status(404).json({ message: "User not found" });
            res.json(user);
        }
        catch (error) {
            res.status(500).json({ message: "Error fetching user", error });
        }
    }
    async getAllUsers(_req, res) {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        }
        catch (error) {
            res.status(500).json({ message: "Error fetching users", error });
        }
    }
    async updateUserDetail(req, res) {
        try {
            const user = await this.userService.updateUser(Number(req.params.id), req.body);
            res.json(user);
        }
        catch (error) {
            res.status(500).json({ message: "Error updating user", error });
        }
    }
    async deleteUser(req, res) {
        try {
            await this.userService.deleteUser(Number(req.params.id));
            res.json({ message: "User deleted successfully" });
        }
        catch (error) {
            res.status(500).json({ message: "Error deleting user", error });
        }
    }
}
export default UserController;
