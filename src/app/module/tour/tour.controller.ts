/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { TourServices } from './tour.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';

const createTour = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await TourServices.createTour(payload);
    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
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
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'all tour retrieve successfully',
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
    const { tourId } = req.params;
    const result = await TourServices.getSingleTourFromDB(tourId);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'single tour retrieve successfully',
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
    const { tourId } = req.params;
    const result = await TourServices.updateTourIntoDB(tourId, payload);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'tour updated successfully',
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
    const { tourId } = req.params;
    await TourServices.deleteTourFromDB(tourId);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Tour deleted successfully',
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

const getNextSchedule = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await TourServices.getNextSchedule(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'get nearest tour schedule successfully',
    data: result,
  });
});

export const TourControllers = {
  createTour,
  getAllTour,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
};
