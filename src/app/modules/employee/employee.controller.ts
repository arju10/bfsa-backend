import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { Request, Response } from 'express';
import { EmployeeServices } from './employee.service';
import { TEmployee } from './employee.interface';

// Crate Single Employee==== API: ("/api/v1/employees/create-employee") === Method :[ POST]
const createEmployee = catchAsync(async (req: Request, res: Response) => {
  const result = await EmployeeServices.createEmployeeIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Employee is created successfully',
    data: result,
  });
});
// Get All Employees ==== API: ("/api/v1/employees") === Method :[ GET]
const getAllEmployees = catchAsync(async (req, res) => {
  const result = await EmployeeServices.getAllEmployeesFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Employees are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

// Get Single Employee By ID ==== API: ("/api/v1/employees/:id") === Method :[ GET]
const getSingleEmployee = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await EmployeeServices.getSingleEmployeeFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Employee is retrieved successfully',
    data: result,
  });
});

// Update Single Employee By ID ==== API: ("/api/v1/employees/:id") === Method :[ PATCH]
const updateSingeEmployee = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EmployeeServices.updateSingleEmployeeFromDB(
    id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Employee is updated successfully',
    data: result,
  });
});

// Delete Single Employee By ID ==== API: ("/api/v1/employees/:id") === Method :[ DELETE]

const deleteEmployee = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await EmployeeServices.deleteSingleEmployeeFromDB(id);

  sendResponse<TEmployee | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Employee deleted successfully',
    data: result,
  });
});

export const EmployeeControllers = {
  createEmployee,
  getAllEmployees,
  getSingleEmployee,
  updateSingeEmployee,
  deleteEmployee,
};
