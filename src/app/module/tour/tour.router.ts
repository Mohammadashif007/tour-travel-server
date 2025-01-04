import express from 'express';
import { TourControllers } from './tour.controller';

const router = express.Router();

router.get('/schedule/:id', TourControllers.getNextSchedule);
router.get('/:tourId', TourControllers.getSingleTour);
router.post('/create-tour', TourControllers.createTour);
router.get('/', TourControllers.getAllTour);
router.put('/:tourId', TourControllers.updateTour);
router.delete('/:tourId', TourControllers.deleteTour);

export const TourRouter = router;
