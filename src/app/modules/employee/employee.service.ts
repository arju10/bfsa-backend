import QueryBuilder from '../../builder/QueryBuilder';
import { EmployeeSearchableFields } from './employee.constant';
import { TEmployee } from './employee.interface';
import { Employee } from './employee.model';

// Crate Single Employee==== API: ("/api/v1/employees/create-employee") === Method :[ POST]
// const createEmployeeIntoDB = async (payload: TEmployee) => {
//   const result = await Employee.create(payload);
//   return result;
// };

// Get All Employees ==== API: ("/api/v1/employees") === Method :[ GET]
const getAllEmployeesFromDB = async (query: Record<string, unknown>) => {
  const employeeQuery = new QueryBuilder(Employee.find(), query)
    .search(EmployeeSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields()
    .populate('department');

  const result = await employeeQuery.modelQuery;
  const meta = await employeeQuery.countTotal();

  return {
    meta,
    result,
  };
};

// Get Single Employee By ID ==== API: ("/api/v1/employees/:id") === Method :[ GET]
const getSingleEmployeeFromDB = async (id: string) => {
  const result = await Employee.findById(id);
  // console.log(`Searching for Employee with ID: ${id}`);
  return result;
};

// Update Single Employee By ID ==== API: ("/api/v1/employees/:id") === Method :[ PATCH]
const updateSingleEmployeeFromDB = async (
  id: string,
  payload: Partial<TEmployee>,
) => {
  const result = await Employee.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  }).populate('department');
  return result;
};

// Delete Single Employee By ID ==== API: ("/api/v1/employees/:id") === Method :[ DELETE]
const deleteSingleEmployeeFromDB = async (
  id: string,
): Promise<TEmployee | null> => {
  const result = await Employee.findByIdAndDelete(id);
  // console.log(`Searching for Employee with ID: ${id}`);
  return result;
};

export const EmployeeServices = {
  // createEmployeeIntoDB,
  getAllEmployeesFromDB,
  getSingleEmployeeFromDB,
  updateSingleEmployeeFromDB,
  deleteSingleEmployeeFromDB,
};
