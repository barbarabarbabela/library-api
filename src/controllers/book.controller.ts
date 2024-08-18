import { Request, Response } from "express";
import books from "../books";
import { Book } from "../interfaces/book.interface";
import { bookService } from "../services/book.service";

const getAllBooks = (req: Request, res: Response) => {
  res.status(200).send(books);
};

const getBookById = (req: Request, res: Response) => {
  const { id } = req.params;

  const book = bookService.getBookById(Number(id));

  if (book) {
    return res.status(200).send(book);
  }

  return res.status(404).send({ message: "Book not found" });
};

const createBook = (req: Request, res: Response) => {
  const body = req.body;

  bookService
    .createBook(body)
    .then((data: Book | Error) => {
      if (data instanceof Error) {
        return res.status(400).json({ message: data.message });
      }
      res.status(201).json({ message: "Book succesfully created", book: data });
    })
    .catch((error: unknown) => {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

const updateBookById = (req: Request, res: Response) => {
  const { id } = req.params;

  const { body } = req;

  const book = bookService.updateBookById(Number(id), body);

  if (!book) {
    return res.status(404).send({ message: "Book not found" });
  }

  res.status(200).json({ message: "Book successfully updated" });
};

const deleteBookById = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const book = bookService.deleteBookById(id);

  if (!book) {
    return res.status(404).send({ message: "Book not found" });
  }

  res.status(200).json({ message: "Book successfully deleted" });
};

export const bookController = {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
