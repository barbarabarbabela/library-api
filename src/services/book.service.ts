import books from "../books";
import { Book } from "../interfaces/book.interface";

const getBookById = (id: number) => {
  const book = books.find((book) => book.id === id);

  return book || null;
};

const createBook = async (data: Book): Promise<Book | Error> => {
  try {
    if (!data) {
      return new Error("Invalid input data");
    }

    const newBook: Book = {
      ...data,
      id: books.length + 1,
    };

    books.push(newBook);

    return newBook;
  } catch (error) {
    return new Error("Failed to create book");
  }
};

const updateBookById = async (id: number, body: Book) => {
  const bookIndex = books.findIndex((book) => book.id === id);

  books[bookIndex] = {
    ...books[bookIndex],
    ...body,
  };

  return bookIndex || null;
};

const deleteBookById = (id: number) => {
  const bookIndex = books.findIndex((book) => book.id === id);

  books.splice(bookIndex, 1);

  return bookIndex || null;
};

export const bookService = {
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
