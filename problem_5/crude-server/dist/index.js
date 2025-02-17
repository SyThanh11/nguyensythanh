import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import rootRoute from "./routes/rootRoute.js";
import errorHandler from "./exception/globalErrorHandler.js";
import configCors from "./config/cors.js";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(configCors);
app.use(morgan('dev'));
app.use(rootRoute);
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on the server!`
    });
});
app.use((err, req, res, next) => {
    errorHandler(err, req, res, next);
});
app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
