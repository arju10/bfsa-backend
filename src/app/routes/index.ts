// Application routes

import express from 'express';
import { DepartmentRoutes } from '../modules/department/department.route';
import { SupplierRoutes } from '../modules/supplier/supplier.route';

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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
