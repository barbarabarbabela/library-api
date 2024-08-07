export interface BookRental {
  id: number;
  bookId: number[],
  userId: number,
  startDate: string,
  dueDate: string,
}