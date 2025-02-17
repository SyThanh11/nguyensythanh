import express from 'express';
import userRoute from './userRoute.js';

const rootRoute = express.Router();

rootRoute.use('/users', userRoute);

export default rootRoute;