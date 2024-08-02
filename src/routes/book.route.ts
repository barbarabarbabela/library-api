import { Router } from "express";
import { bookController } from "../controllers/book.controller";

const bookRouter = Router();

bookRouter.get("/books", bookController.getAllBooks);
bookRouter.get("/books/:id", bookController.getBookById);
bookRouter.post("/books", bookController.createBook);
bookRouter.patch("/books/:id", bookController.updateBookById);
bookRouter.delete("/books/:id", bookController.deleteBookById);

export default bookRouter;