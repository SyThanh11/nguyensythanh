import { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const configCors = (app: Express): void => {
  app.use((req: Request, res: Response, next: NextFunction): void => {
    const httpOrigin = req.headers.origin;

    if (httpOrigin && httpOrigin === process.env.URL_CLIENT) {
        res.setHeader("Access-Control-Allow-Origin", httpOrigin as string);
    }

    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With, content-type, Authorization, Content-type , Accept, x-no-retry"
    );

    res.setHeader("Access-Control-Allow-Credentials", "true");

    if (req.method === "OPTIONS") {
      res.sendStatus(200);
      return;  
    }

    next();
  });
};

export default configCors;
