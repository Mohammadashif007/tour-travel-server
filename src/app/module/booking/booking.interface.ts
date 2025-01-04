import mongoose from 'mongoose';

export interface IBooking {
  user: mongoose.Schema.Types.ObjectId;
  tour: mongoose.Schema.Types.ObjectId;
  bookingStatus: 'pending' | 'paid' | 'cancelled';
  totalPrice: number;
  bookedSlots: number;
}
