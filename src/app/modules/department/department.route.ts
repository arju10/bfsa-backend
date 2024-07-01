import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { DepartmentValidation } from './department.validation';
import { DepartmentControllers } from './department.controller';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(DepartmentValidation.createDepartmentValidationSchema),
  DepartmentControllers.createDepartment,
);

router.get('/:id', DepartmentControllers.getSingleDepartment);

router.patch(
  '/:id',
  validateRequest(DepartmentValidation.updateDepartmentValidationSchema),
  DepartmentControllers.updateSingleDepartment,
);
router.delete('/:id', DepartmentControllers.deleteDepartment);

router.get('/', DepartmentControllers.getAllDepartments);

export const DepartmentRoutes = router;
