import { Request, Response } from "express";
import UserService from "../services/userService.js";

class UserController {
  private userService = new UserService();

  createUser = async (req: Request, res: Response) => {
    try {
      console.log("Request received");
      console.log(req.body);
      const user = await this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error creating user", error });
    }
  };

  getUserDetail = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.getUserById(Number(req.params.id));
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user", error });
    }
  };

  getAllUsers = async (_req: Request, res: Response) => {
    try {
      const users = await this.userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users", error });
    }
  };

  updateUserDetail = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.updateUser(Number(req.params.id), req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Error updating user", error });
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      await this.userService.deleteUser(Number(req.params.id));
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting user", error });
    }
  };
}

export default UserController;
