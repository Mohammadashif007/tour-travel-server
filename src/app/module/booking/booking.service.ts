import mongoose from 'mongoose';
import { Tour } from '../tour/tour.model';
import { IBooking } from './booking.interface';
import { Booking } from './booking.model';

const createBookingIntoDB = async (payload: IBooking) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const { tour, bookedSlots } = payload;
    const requiredTour = await Tour.findById(tour).session(session);
    if (!requiredTour) {
      throw new Error('Tour not found!');
    }

    //   ! set totalPrice and bookingStatus
    const totalPrice = requiredTour.price * bookedSlots;
    payload.totalPrice = totalPrice;
    payload.bookingStatus = 'pending';

    //   ! check available seats
    if (requiredTour.availableSeats < bookedSlots) {
      throw new Error('Not enough seats available');
    }

    //   ! create booking
    const booking = await Booking.create([payload], { session });

    //   ! update available seats
    const updateTour = await Tour.findByIdAndUpdate(
      tour,
      {
        $inc: { availableSeats: -bookedSlots },
      },
      { new: true, session },
    );

    if (!updateTour) {
      throw new Error('Failed to update available seats');
    }

    await session.commitTransaction();
    session.endSession();
    return booking[0];
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

const getAllBookingFromDB = async () => {
  const result = await Booking.find();
  return result;
};

const getSingleBookingFromDB = async (id: string) => {
  const result = await Booking.findById(id);
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingFromDB,
  getSingleBookingFromDB,
};
