import { model, Schema } from 'mongoose';
import TTourModel, { ITourMethods, TTour } from './tour.interface';

const tourSchema = new Schema<TTour, TTourModel, ITourMethods>({
  name: { type: String, required: true },
  durationHours: { type: Number, required: true },
  averageRating: { type: Number, default: 5 },
  price: { type: Number, required: true },
  coverImage: { type: String, required: true },
  images: [String],
  startDates: [Date],
  startLocation: { type: String },
  locations: [String],
  slug: String,
});

// ! instance method
tourSchema.methods.getNextNearestStartDateAndEndDate = function () {
  const today = new Date();
  const futureDates = this.startDates.filter((startDate: Date) => {
    return startDate > today;
  });
  futureDates.sort((a: Date, b: Date) => a.getTime() - b.getTime());
  const nearestStartDate = futureDates[0];
  const estimatedEndDate = new Date(
    nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000,
  );
  return {
    nearestStartDate,
    estimatedEndDate,
  };
};

export const Tour = model<TTour, TTourModel>('Tour', tourSchema);
