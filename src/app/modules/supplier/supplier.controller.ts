import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { Request, Response } from 'express';
import { SupplierServices } from './supplier.service';
import { TSupplier } from './supplier.interface';

// Crate Single Supplier==== API: ("/api/v1/suppliers/create-supplier") === Method :[ POST]
const createSupplier = catchAsync(async (req: Request, res: Response) => {
  const result = await SupplierServices.createSupplierIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Supplier is created successfully',
    data: result,
  });
});
// Get All Suppliers ==== API: ("/api/v1/suppliers") === Method :[ GET]
const getAllSuppliers = catchAsync(async (req, res) => {
  const result = await SupplierServices.getAllSuppliersFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Suppliers are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

// Get Single Supplier By ID ==== API: ("/api/v1/suppliers/:supplierId") === Method :[ GET]
const getSingleSupplier = catchAsync(async (req, res) => {
  const { supplierId } = req.params;

  const result = await SupplierServices.getSingleSupplierFromDB(supplierId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Supplier is retrieved successfully',
    data: result,
  });
});

// Update Single Supplier By ID ==== API: ("/api/v1/suppliers/:supplierId") === Method :[ PATCH]
const updateSingeSupplier = catchAsync(async (req, res) => {
  const { supplierId } = req.params;
  const result = await SupplierServices.updateSingleSupplierFromDB(
    supplierId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Supplier is updated successfully',
    data: result,
  });
});

// Delete Single Supplier By ID ==== API: ("/api/v1/suppliers/:supplierId") === Method :[ DELETE]

const deleteSupplier = catchAsync(async (req: Request, res: Response) => {
  const supplierId = req.params.supplierId;

  const result = await SupplierServices.deleteSingleSupplierFromDB(supplierId);

  sendResponse<TSupplier | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Supplier deleted successfully',
    data: result,
  });
});

export const SupplierControllers = {
  createSupplier,
  getAllSuppliers,
  getSingleSupplier,
  updateSingeSupplier,
  deleteSupplier,
};
