import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { Request, Response } from 'express';
import { DepartmentServices } from './department.service';
import { TDepartment } from './department.interface';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await DepartmentServices.createDepartmentIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Department is created successfully',
    data: result,
  });
});

const getAllDepartments = catchAsync(async (req, res) => {
  const result = await DepartmentServices.getAllDepartmentsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Departments are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await DepartmentServices.getSingleDepartmentFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Department is retrieved successfully',
    data: result,
  });
});

const updateSingleDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DepartmentServices.updateDepartmentIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Department is updated successfully',
    data: result,
  });
});

// Delete Single Semester By ID ==== API: ("/api/v1/academic-semesters/:id") === Method :[ DELETE]

const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await DepartmentServices.deleteDepartmentFromDb(id);

  sendResponse<TDepartment | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Department deleted successfully',
    data: result,
  });
});

export const DepartmentControllers = {
  createDepartment,
  getAllDepartments,
  getSingleDepartment,
  updateSingleDepartment,
  deleteDepartment,
};
