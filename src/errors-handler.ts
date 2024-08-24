import { NextFunction, Response, Request } from "express";
import ValidationError from "./errors/validation-error";
import InternalError from "./errors/internal-error";
import NotFound from "./errors/not-found";

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(error.stack);

  if (error instanceof ValidationError) {
    res.status(400).json({ error: error.message });
  } else if (error instanceof NotFound) {
    res.status(404).json({ error: "Unknown Error" });
  } else if (error instanceof InternalError) {
    res.status(500).json({ error: error.message });
  }
};
