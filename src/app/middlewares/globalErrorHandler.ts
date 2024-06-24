import { ErrorRequestHandler, Request, Response } from 'express';
import config from '../../config';

// Global Error Handler
const globalErrorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
) => {};

export default globalErrorHandler;
