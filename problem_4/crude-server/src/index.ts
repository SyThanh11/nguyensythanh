import express, { Express, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import rootRoute from "./routes/rootRoute.js";
import errorHandler from "./exception/globalErrorHandler.js";
import { CustomError } from "./exception/CustomError.js";
import configCors from "./config/cors.js";
import { ErrorCode } from "./exception/ErrorCode.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

configCors(app);

app.use(express.json());
app.use(morgan('dev'));

app.use(rootRoute);
app.use((_req: Request, _res: Response, next: NextFunction) => {
    next(new CustomError(ErrorCode.URL_NOT_FOUND));
});
app.use((err: Error | CustomError, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next);
});


app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
