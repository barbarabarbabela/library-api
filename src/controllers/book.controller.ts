import { Request, Response } from "express";
import books from "../library";

const getAllBooks = (req: Request, res: Response) => {
  res.status(200).send(books);
};

const getBookById = (req: Request, res: Response) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === Number(id));
  res.status(200).send(book);
};

const createBook = (req: Request, res: Response) => {
  const { body } = req;

  console.log(books.length);

  const newBook = {
    id: books.length + 1,
    ...body,
  };

  books.push(newBook);

  res.status(201).json({ message: "Book succesfully created", book: newBook });
};

export { getAllBooks, getBookById, createBook };
