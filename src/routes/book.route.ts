import { Router } from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
} from "../controllers/book.controller";

const router = Router();

router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.post("/books", createBook);
router.patch("/books/:id", updateBookById)

export default router;
