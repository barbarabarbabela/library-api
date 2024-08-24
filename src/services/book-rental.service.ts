import rentals from "../book-rental";
import InternalError from "../errors/internal-error";
import { BookRental } from "../interfaces/book-rental.interface";

const createBookRental = async (data: BookRental): Promise<BookRental> => {
  try {
    const { userId, bookId, startDate } = data;

    const dueDateTimestamp =
      new Date(startDate).getTime() + 14 * 24 * 60 * 60 * 1000;

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
    throw new InternalError("Failed to create book");
  }
};

export const bookRentalService = {
  createBookRental,
};
