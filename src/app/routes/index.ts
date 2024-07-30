// Application routes

import express from 'express';
import { DepartmentRoutes } from '../modules/department/department.route';
import { SupplierRoutes } from '../modules/supplier/supplier.route';
import { EmployeeRoutes } from '../modules/employee/employee.route';
import { UserRoutes } from '../modules/User/user.route';
import { AdminRoutes } from '../modules/Admin/admin.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
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
  {
    path: '/admins',
    route: AdminRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
