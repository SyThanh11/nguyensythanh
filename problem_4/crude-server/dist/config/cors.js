import dotenv from 'dotenv';
dotenv.config();
const configCors = (app) => {
    app.use((req, res, next) => {
        const httpOrigin = req.headers.origin;
        if (httpOrigin === process.env.URL_CLIENT) {
            res.setHeader("Access-Control-Allow-Origin", httpOrigin);
        }
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type, Authorization, Content-type , Accept, x-no-retry");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        if (req.method === "OPTIONS") {
            res.sendStatus(200);
            return;
        }
        next();
    });
};
export default configCors;
