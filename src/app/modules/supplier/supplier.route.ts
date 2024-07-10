import { Router } from 'express';
import { SupplierControllers } from './supplier.controller';
import validateRequest from '../../middlewares/validateRequest';
import { SupplierValidation } from './supplier.validation';

const router = Router();

// CRUD routes for Supplier
// router.post('/suppliers', roleMiddleware([UserRole.ROLE_SUPER_ADMIN, UserRole.ROLE_ADMIN]), SupplierControllers.createSupplier);
// router.get('/suppliers', roleMiddleware([UserRole.ROLE_SUPER_ADMIN, UserRole.ROLE_ADMIN, UserRole.ROLE_EMPLOYEE]), SupplierControllers.getAllSuppliers);
// router.get('/suppliers/:supplierId', roleMiddleware([UserRole.ROLE_SUPER_ADMIN, UserRole.ROLE_ADMIN, UserRole.ROLE_EMPLOYEE]), SupplierControllers.getSupplierById);
// router.patch('/suppliers/:supplierId', roleMiddleware([UserRole.ROLE_SUPER_ADMIN, UserRole.ROLE_ADMIN]), SupplierControllers.updateSupplier);
// router.delete('/suppliers/:supplierId', roleMiddleware([UserRole.ROLE_SUPER_ADMIN, UserRole.ROLE_ADMIN]), SupplierControllers.deleteSupplier);

router.post(
  '/create-supplier',
  validateRequest(SupplierValidation.createSupplierValidationSchema),
  SupplierControllers.createSupplier,
);
router.get('/:supplierId', SupplierControllers.getSingleSupplier);
router.patch(
  '/:supplierId',
  validateRequest(SupplierValidation.updateSupplierValidationSchema),
  SupplierControllers.updateSingeSupplier,
);
router.delete('/:supplierId', SupplierControllers.deleteSupplier);
router.get('/', SupplierControllers.getAllSuppliers);

export const SupplierRoutes = router;
