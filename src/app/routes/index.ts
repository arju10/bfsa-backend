// Application routes

import express from 'express';
import { DepartmentRoutes } from '../modules/department/department.route';
import { SupplierRoutes } from '../modules/supplier/supplier.route';
import { EmployeeRoutes } from '../modules/employee/employee.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/departments',
    route: DepartmentRoutes,
  },
  {
    path: '/suppliers',
    route: SupplierRoutes,
  },
  {
    path: '/employees',
    route: EmployeeRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
