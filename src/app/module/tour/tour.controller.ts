/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { TourServices } from './tour.service';

const createTour = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await TourServices.createTour(payload);
    res.status(200).json({
      success: true,
      message: 'Tour created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};


const getAllTour = async (req: Request, res: Response) => {
    try {
      const result = await TourServices.getAllTourFromDB();
      res.status(200).json({
        success: true,
        message: ' All Tour retrieve successfully',
        data: result,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Something went wrong',
        error: error,
      });
    }
  };

const getSingleTour = async (req: Request, res: Response) => {
    try {
        const {tourId} = req.params;
      const result = await TourServices.getSingleTourFromDB(tourId);
      res.status(200).json({
        success: true,
        message: ' Single Tour retrieve successfully',
        data: result,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Something went wrong',
        error: error,
      });
    }
  };


  const updateTour = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const {tourId} = req.params;
      const result = await TourServices.updateTourIntoDB(tourId, payload);
      res.status(200).json({
        success: true,
        message: ' Single Tour updated successfully',
        data: result,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Something went wrong',
        error: error,
      });
    }
  };

  const deleteTour = async (req: Request, res: Response) => {
    try {
        const {tourId} = req.params;
      await TourServices.deleteTourFromDB(tourId);
      res.status(200).json({
        success: true,
        message: ' Single Tour deleted successfully',
        data: {},
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Something went wrong',
        error: error,
      });
    }
  };

  const getNextSchedule = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await TourServices.getNextSchedule(id);
      res.status(200).json({
        success: true,
        message: ' get nearest tour schedule successfully',
        data: result,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Something went wrong',
        error: error,
      });
    }
  };


export const TourControllers = {
    createTour,
    getAllTour,
    getSingleTour,
    updateTour,
    deleteTour,
    getNextSchedule
}