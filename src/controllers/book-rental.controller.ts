import { NextFunction, Request, Response } from "express";
import rentals from "../book-rental";
import { bookRentalService } from "../services/book-rental.service";
import { BookRental } from "../interfaces/book-rental.interface";
import ValidationError from "../errors/validation-error";

const getAllRentals = (req: Request, res: Response) => {
  res.status(200).send(rentals);
};

const getRentalByUser = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  const rentedBooks = rentals.filter(
    (rental) => rental.userId === Number(userId)
  );

  res.status(200).send(rentedBooks);
};

const createBookRental = (req: Request, res: Response, next: NextFunction) => {
  try {
    const body: BookRental = req.body;

    if (!body.id || !body.startDate || !body.userId || !body.bookId) {
      throw new ValidationError("Invalid input data");
    }

    const newRental = bookRentalService.createBookRental(body);

    res.status(201).json(newRental);
  } catch (error) {
    next(error);
  }
};

export const bookRentalController = {
  getAllRentals,
  getRentalByUser,
  createBookRental,
};
