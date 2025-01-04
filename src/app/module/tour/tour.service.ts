import { TTour } from './tour.interface';
import { Tour } from './tour.model';

const createTour = async (payload: TTour) => {
  const result = await Tour.create(payload);
  return result;
};

const getAllTourFromDB = async () => {
  const result = await Tour.find();
  return result;
};

const getSingleTourFromDB = async (id: string) => {
  const result = await Tour.findById(id);
  return result;
};

const updateTourIntoDB = async (id: string, payload: Partial<TTour>) => {
  const result = await Tour.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteTourFromDB = async (id: string) => {
  const result = await Tour.findByIdAndDelete(id);
  return result;
};

const getNextSchedule = async (id: string) => {
  const tour = await Tour.findById(id);
  const nextSchedule = tour?.getNextNearestStartDateAndEndDate();
  return {
    tour,
    nextSchedule,
  };
};

export const TourServices = {
  createTour,
  getAllTourFromDB,
  getSingleTourFromDB,
  updateTourIntoDB,
  deleteTourFromDB,
  getNextSchedule
};
