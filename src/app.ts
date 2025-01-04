/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { UserRouter } from './app/module/user/user.router';
import { TourRouter } from './app/module/tour/tour.router';

import { BookingRouter } from './app/module/booking/booking.router';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
const app = express();

// ! middleware
app.use(express.json());

// ! application api
app.use('/api/user', UserRouter);
app.use('/api/tour', TourRouter);
app.use('/api/booking', BookingRouter);

app.get('/', (req, res) => {
  res.send({ message: 'Server is Live 🚩🏴‍☠️🚨⚡🔥', status: true, code: 200 });
});

app.use(globalErrorHandler);

export default app;
