import QueryBuilder from '../../builder/QueryBuilder';
import { DepartmentSearchableFields } from './department.constant';
import { TDepartment } from './department.interface';
import { Department } from './department.model';

// Create Single Department==== API: ("/api/v1/departments/create-department) === Method :[ POST]
const createDepartmentIntoDB = async (payload: TDepartment) => {
  const result = await Department.create(payload);
  return result;
};

// GEt All Departments==== API: ("/api/v1/departments) === Method :[ GET]
const getAllDepartmentsFromDB = async (query: Record<string, unknown>) => {
  const departmentQuery = new QueryBuilder(Department.find(), query)
    .search(DepartmentSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await departmentQuery.modelQuery;
  const meta = await departmentQuery.countTotal();

  return {
    meta,
    result,
  };
};

// Get Single Department By ID ==== API: ("/api/v1/departments/:id") === Method :[ GET]
const getSingleDepartmentFromDB = async (id: string) => {
  const result = await Department.findById(id);
  // console.log(`Searching for department with ID: ${id}`);
  return result;
};

// Update Single Department By ID ==== API: ("/api/v1/departments/:id") === Method :[ PATCH]
const updateDepartmentIntoDB = async (
  id: string,
  payload: Partial<TDepartment>,
) => {
  const result = await Department.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

// Delete Single Department By ID ==== API: ("/api/v1/departments/:id") === Method :[ DELETE]
const deleteDepartmentFromDb = async (
  id: string,
): Promise<TDepartment | null> => {
  const result = await Department.findByIdAndDelete(id);
  return result;
};

export const DepartmentServices = {
  createDepartmentIntoDB,
  getAllDepartmentsFromDB,
  getSingleDepartmentFromDB,
  updateDepartmentIntoDB,
  deleteDepartmentFromDb,
};
