import { Request, Response } from "express";
import books from "../library";
import { Book } from "../interfaces/book.interface";

const getAllBooks = (req: Request, res: Response) => {
  res.status(200).send(books);
};

const getBookById = (req: Request, res: Response) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === Number(id));
  res.status(200).send(book);
};

const createBook = (req: Request, res: Response) => {
  const body: Omit<Book, "id"> = req.body;

  const newBook: Book = {
    id: books.length + 1,
    ...body,
  };

  books.push(newBook);

  res.status(201).json({ message: "Book succesfully created", book: newBook });
};

const updateBookById = (req: Request, res: Response) => {
  const id: number = Number(req.params.id);

  const newBookData: Partial<Book> = req.body;

  const bookIndex = books.findIndex((book) => book.id === id);

  books[bookIndex] = {
    ...books[bookIndex],
    ...newBookData,
  };

  res.status(200).json({ message: "Book successfully updated", books });
};

const deleteBookById = (req: Request, res: Response) => {
  const id: number = Number(req.params.id)

  const bookIndex = books.findIndex((book) => book.id === id);

  books.splice(bookIndex, 1)

  res.status(200).json({ message: "Book successfully deleted", books})

}



export const bookController = {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById
};
