import { NextFunction, Request, Response } from "express";
import books from "../books";
import { bookService } from "../services/book.service";
import { Book } from "../interfaces/book.interface";
import ValidationError from "../errors/validation-error";

const getAllBooks = (_req: Request, res: Response) => {
  res.status(200).send(books);
};

const getBookById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const book = bookService.getBookById(Number(id));

    return res.status(200).send(book);
  } catch (error: unknown) {
    next(error);
  }
};

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body: Book = req.body;

    if (!body.title || !body.author || !body.genre || !body.publishedYear) {
      throw new ValidationError("Invalid input data");
    }

    const newBook: Book = await bookService.createBook(body);

    res.status(201).json(newBook);
  } catch (error: unknown) {
    next(error);
  }
};

const updateBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const book: Book = await bookService.updateBookById(Number(id), body);

    res.status(200).json(book);
  } catch (error: unknown) {
    next(error);
  }
};

const deleteBookById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    bookService.deleteBookById(Number(id));

    res.status(204).json();
  } catch (error: unknown) {
    next(error);
  }
};

export const bookController = {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
