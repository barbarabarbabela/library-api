import express from "express";
import router from "./routes/routes";
import { errorHandler } from "./errors-handler";

const app = express();

app.use(express.json());

app.use(router);

app.use(errorHandler);

export default app;
