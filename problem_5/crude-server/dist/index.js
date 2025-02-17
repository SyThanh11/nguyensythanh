import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import rootRoute from "./routes/rootRoute.js";
import errorHandler from "./exception/globalErrorHandler.js";
import { CustomError } from "./exception/CustomError.js";
import configCors from "./config/cors.js";
import { ErrorCode } from "./exception/ErrorCode.js";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
configCors(app);
app.use(express.json());
app.use(morgan('dev'));
app.use(process.env.API_BACKEND, rootRoute);
app.use((_req, _res, next) => {
    next(new CustomError(ErrorCode.URL_NOT_FOUND));
});
app.use((err, req, res, next) => {
    errorHandler(err, req, res, next);
});
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}${process.env.API_BACKEND}`);
});
