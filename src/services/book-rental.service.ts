import rentals from "../book-rental";
import { BookRental } from "../interfaces/book-rental.interface";

const createBookRental = async (data: BookRental): Promise<BookRental | Error> => {
  try {
    const { userId, bookId, startDate } = data;

    if (!userId || !bookId || !startDate || !Array.isArray(bookId)) {
      return new Error("Invalid input data");
    }

    const dueDateTimestamp = new Date(startDate).getTime() + 14 * 24 * 60 * 60 * 1000;

    const newRental: BookRental = {
      id: rentals.length + 1,
      userId,
      bookId,
      startDate,
      dueDate: new Date(dueDateTimestamp).toISOString(),
    };

    rentals.push(newRental);
    return newRental;
  } catch (error) {
    return new Error("Failed to create book rental");
  }
};

export const bookRentalService = {
  createBookRental,
};
