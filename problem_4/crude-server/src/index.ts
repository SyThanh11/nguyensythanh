import express, { Express } from "express";
import dotenv from "dotenv";
import rootRoute from "./routes/rootRoute.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(express.json());
app.use(express.json());

app.use(rootRoute);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
