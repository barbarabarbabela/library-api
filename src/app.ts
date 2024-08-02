import express from "express";
import bookRouter from "./routes/book.route";
import userRouter from "./routes/user.route";

const app = express();

app.use(express.json());

app.use(bookRouter);
app.use(userRouter)

export default app;
