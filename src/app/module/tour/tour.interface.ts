import { Model } from "mongoose";

export type TTour = {
  name: string;
  durationHours: number;
  averageRating: number;
  price: number;
  coverImage: string;
  images: string[];
  startDates: Date[];
  startLocation: string;
  locations: string[];
  slug: string;
  availableSeats: number;
};

export interface ITourMethods {
  getNextNearestStartDateAndEndDate(): {
    nearestStartDate: Date | null;
    estimatedEndDate: Date | null;
  };
}

type TTourModel = Model<TTour, Record<string, unknown>, ITourMethods>;

export default TTourModel;
