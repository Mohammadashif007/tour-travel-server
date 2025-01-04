/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';

const createUser = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await UserServices.createUserIntoDB(payload);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Create user successfully',
    data: result,
  });
});

const getAllUser = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUserFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'All user retrieve successfully',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await UserServices.getSingleUserFromDB(userId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'get single user retrieve successfully',
    data: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const payload = req.body;
  const { userId } = req.params;
  const result = await UserServices.updateUserIntoDB(userId, payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'user updated successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  await UserServices.deleteUserFromDB(userId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User deleted successfully',
    data: {},
  });
});

export const UserControllers = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
