import express from 'express';
import { BookingController } from './booking.controller';

const router = express.Router();

router.get('/:id', BookingController.getSingleBooking);
router.post('/create-booking', BookingController.createBooking);
router.get('/', BookingController.getAllBooking);

export const BookingRouter = router;
