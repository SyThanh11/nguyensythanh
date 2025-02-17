import express from 'express';
import UserController from '../controllers/userController.js';
import asyncHandler from '../middleware/asyncHandler.js';
const userRoute = express.Router();
const userController = new UserController();
userRoute.param('id', asyncHandler(userController.checkUserExist));
userRoute.route('/')
    .get(asyncHandler(userController.getAllUsers))
    .post(asyncHandler(userController.createUser));
userRoute.route('/:id')
    .get(asyncHandler(userController.getUserDetail))
    .put(asyncHandler(userController.updateUserDetail))
    .delete(asyncHandler(userController.deleteUser));
export default userRoute;
