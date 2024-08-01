import { Router } from "express";
import {
  bookController
} from "../controllers/book.controller";

const router = Router();

router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getBookById);
router.post("/books", bookController.createBook);
router.patch("/books/:id", bookController.updateBookById)
router.delete("/books/:id", bookController.deleteBookById)

export default router;
