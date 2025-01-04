/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(StatusCodes.FORBIDDEN).json({
    success: false,
    message: err.message || 'Something went wrong',
    error: err,
  });
};
