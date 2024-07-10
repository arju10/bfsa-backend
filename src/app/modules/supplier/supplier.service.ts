import QueryBuilder from '../../builder/QueryBuilder';
import { SupplierSearchableFields } from './supplier.constant';

import { TSupplier } from './supplier.interface';
import { Supplier } from './supplier.model';

// Crate Single Supplier==== API: ("/api/v1/suppliers/create-supplier") === Method :[ POST]
const createSupplierIntoDB = async (payload: TSupplier) => {
  const result = await Supplier.create(payload);
  return result;
};

// Get All Suppliers ==== API: ("/api/v1/suppliers") === Method :[ GET]
const getAllSuppliersFromDB = async (query: Record<string, unknown>) => {
  const supplierQuery = new QueryBuilder(Supplier.find(), query)
    .search(SupplierSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await supplierQuery.modelQuery;
  const meta = await supplierQuery.countTotal();

  return {
    meta,
    result,
  };
};

// Get Single Supplier By ID ==== API: ("/api/v1/suppliers/:supplierId") === Method :[ GET]
const getSingleSupplierFromDB = async (supplierId: string) => {
  const result = await Supplier.findById(supplierId);
  // console.log(`Searching for Supplier with ID: ${supplierId}`);
  return result;
};

// Update Single Supplier By ID ==== API: ("/api/v1/suppliers/:supplierId") === Method :[ PATCH]
const updateSingleSupplierFromDB = async (
  supplierId: string,
  payload: Partial<TSupplier>,
) => {
  const result = await Supplier.findOneAndUpdate({ _id: supplierId }, payload, {
    new: true,
  });
  return result;
};

// Delete Single Supplier By ID ==== API: ("/api/v1/suppliers/:supplierId") === Method :[ DELETE]
const deleteSingleSupplierFromDB = async (
  supplierId: string,
): Promise<TSupplier | null> => {
  const result = await Supplier.findByIdAndDelete(supplierId);
  // console.log(`Searching for Supplier with ID: ${supplierId}`);
  return result;
};

export const SupplierServices = {
  createSupplierIntoDB,
  getAllSuppliersFromDB,
  getSingleSupplierFromDB,
  updateSingleSupplierFromDB,
  deleteSingleSupplierFromDB,
};
