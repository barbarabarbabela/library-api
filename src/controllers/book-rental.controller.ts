import { Request, Response } from "express";
import rentals from "../book-rental";
import { BookRental } from "../interfaces/book-rental.interface";

const getRentalByUser = (req: Request, res: Response) => {
  const { userId } = req.params;

  const rentedBooks = rentals.filter(
    (rental) => rental.userId === Number(userId)
  );

  res.status(200).send(rentedBooks);
};

const createBookRental = (req: Request, res: Response) => {
  const { userId, bookId, startDate } = req.body;

  if (!userId || !bookId || !startDate || !Array.isArray(bookId)) {
    return res
      .status(400)
      .send({
        error: "All fields are required",
      });
  }

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

  res.status(201).json({ message: `Book succesfully rented by user ${userId}`});
};

export const bookRentalController = {
  getRentalByUser,
  createBookRental,
};
