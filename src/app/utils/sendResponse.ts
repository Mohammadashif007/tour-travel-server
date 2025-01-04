import { Response } from 'express';

type TData<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T | T[] | null;
};

const sendResponse = <T>(res: Response, data: TData<T>) => {
  res.status(data?.statusCode).json({
    success: data?.success,
    message: data?.message,
    statusCode: data?.statusCode,
    data: data?.data,
  });
};

export default sendResponse;
