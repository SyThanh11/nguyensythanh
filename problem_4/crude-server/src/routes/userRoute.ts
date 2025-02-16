import express from 'express'
import UserController from '../controllers/userController.js';
import asyncHandler from '../middleware/asyncHandler.js';

const userRoute = express.Router();
const userController = new UserController();

userRoute.post('/', asyncHandler(userController.createUser));
userRoute.get('/', asyncHandler(userController.getAllUsers));
userRoute.put('/:id', asyncHandler(userController.updateUserDetail));
userRoute.get('/:id', asyncHandler(userController.getUserDetail));
userRoute.delete('/:id', asyncHandler(userController.deleteUser));

export default userRoute;