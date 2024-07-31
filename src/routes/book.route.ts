import { Router } from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
} from "../controllers/book.controller";

const router = Router();

router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.post("/books", createBook);

export default router;
