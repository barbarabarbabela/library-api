import { Router } from "express";
import { bookController } from "../controllers/book.controller";
import { userController } from "../controllers/user.controller";
import { bookRentalController } from "../controllers/book-rental.controller";

const router = Router();

router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getBookById);
router.post("/books", bookController.createBook);
router.patch("/books/:id", bookController.updateBookById);
router.delete("/books/:id", bookController.deleteBookById);

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById)
router.post("/users", userController.createUser)
router.patch("/users/:id", userController.updateUser)
router.delete("/users/:id", userController.deleteUser)

router.get("/:userId/rentals", bookRentalController.getRentalByUser)
router.post("/rentals", bookRentalController.createBookRental)


export default router