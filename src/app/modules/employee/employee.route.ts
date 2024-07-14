import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { EmployeeValidations } from './employee.validation';
import { EmployeeControllers } from './employee.controller';

const router = Router();

// CRUD routes for employee
// router.post('/employees', roleMiddleware([UserRole.ROLE_SUPER_ADMIN, UserRole.ROLE_ADMIN]), employeeControllers.createemployee);
// router.get('/employees', roleMiddleware([UserRole.ROLE_SUPER_ADMIN, UserRole.ROLE_ADMIN, UserRole.ROLE_EMPLOYEE]), employeeControllers.getAllemployees);
// router.get('/employees/:id', roleMiddleware([UserRole.ROLE_SUPER_ADMIN, UserRole.ROLE_ADMIN, UserRole.ROLE_EMPLOYEE]), employeeControllers.getemployeeById);
// router.patch('/employees/:id', roleMiddleware([UserRole.ROLE_SUPER_ADMIN, UserRole.ROLE_ADMIN]), employeeControllers.updateemployee);
// router.delete('/employees/:id', roleMiddleware([UserRole.ROLE_SUPER_ADMIN, UserRole.ROLE_ADMIN]), employeeControllers.deleteemployee);

router.post(
  '/create-employee',
  validateRequest(EmployeeValidations.createEmployeeValidationSchema),
  EmployeeControllers.createEmployee,
);
router.get('/:id', EmployeeControllers.getSingleEmployee);
router.patch(
  '/:id',
  validateRequest(EmployeeValidations.updateEmployeeValidationSchema),
  EmployeeControllers.updateSingeEmployee,
);
router.delete('/:id', EmployeeControllers.deleteEmployee);
router.get('/', EmployeeControllers.getAllEmployees);

export const EmployeeRoutes = router;
