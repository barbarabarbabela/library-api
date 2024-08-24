import books from "../books";
import InternalError from "../errors/internal-error";
import NotFound from "../errors/not-found";
import { Book } from "../interfaces/book.interface";

const getBookById = (id: number) => {
  const book = books.find((book) => book.id === id);

  if (!book) {
    throw new NotFound("Book not found");
  }

  return book;
};

const createBook = async (data: Book): Promise<Book> => {
  try {
    const newBook = {
      ...data,
      id: books.length + 1,
    };

    books.push(newBook);

    return newBook;
  } catch (error) {
    throw new InternalError("Failed to create book");
  }
};

const updateBookById = async (id: number, body: Book) => {
  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    throw new NotFound("Book not found");
  }

  books[index] = {
    ...books[index],
    ...body,
  };

  return books[index];
};

const deleteBookById = (id: number) => {
  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    throw new NotFound("Book not found");
  }

  delete books[index];
};

export const bookService = {
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
