import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { EmployeeValidations } from './employee.validation';
import { EmployeeControllers } from './employee.controller';

const router = Router();

// router.post(
//   '/create-employee',
//   validateRequest(EmployeeValidations.createEmployeeValidationSchema),
//   EmployeeControllers.createEmployee,
// );
router.get('/:id', EmployeeControllers.getSingleEmployee);
router.patch(
  '/:id',
  validateRequest(EmployeeValidations.updateEmployeeValidationSchema),
  EmployeeControllers.updateSingeEmployee,
);
router.delete('/:id', EmployeeControllers.deleteEmployee);
router.get('/', EmployeeControllers.getAllEmployees);

export const EmployeeRoutes = router;
