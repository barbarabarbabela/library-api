import { Request, Response } from 'express';
import books from '../library';

const getAllBooks = (req: Request, res: Response) => {
    res.status(200).send(books);
}

const getBookById = (req: Request, res: Response) => {
    const { id } = req.params;
    const book = books.find(book => book.id === Number(id));
    res.status(200).send(book);
}

export { getAllBooks, getBookById };
