import { Request, Response } from "express";
import rentals from "../book-rental";
import { bookRentalService } from "../services/book-rental.service";

const getAllRentals = (req: Request, res: Response) => {
 res.status(200).send(rentals)
}

const getRentalByUser = (req: Request, res: Response) => {
  const { userId } = req.params;

  const rentedBooks = rentals.filter(
    (rental) => rental.userId === Number(userId)
  );

  res.status(200).send(rentedBooks);
};

const createBookRental = (req: Request, res: Response) => {
  const { body } = req;

  bookRentalService.createBookRental(body)
  .then(data => {
    if (data instanceof Error) {
      return res.status(400).json({ error: data.message });
    }

    res.status(201).json({ message: `Book successfully rented`, rental: data });
  })
  .catch(error => {
    res.status(500).json({ error: 'Internal server error' });
  });
};

export const bookRentalController = {
  getAllRentals,
  getRentalByUser,
  createBookRental,
};
