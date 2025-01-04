import { BookingServices } from './booking.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';

const createBooking = catchAsync(async (req, res) => {
  const payload = req.body;
  console.log(payload);
  const result = await BookingServices.createBookingIntoDB(payload);
  sendResponse(res, {
    success: true,
    message: 'Booking created successfully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

const getAllBooking = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingFromDB();
  sendResponse(res, {
    success: true,
    message: 'All booking retrieve successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

const getSingleBooking = catchAsync(async (req, res) => {
  const bookingId = req.params.id;
  const result = await BookingServices.getSingleBookingFromDB(bookingId);
  sendResponse(res, {
    success: true,
    message: 'Single booking retrieve successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

export const BookingController = {
  createBooking,
  getAllBooking,
  getSingleBooking,
};
