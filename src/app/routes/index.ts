// Application routes

import express from 'express';
// import { DepartmentRoutes } from '../modules/department/department.route';

const router = express.Router();

const moduleRoutes = [
  // {
  //   path: '/departments',
  //   route: DepartmentRoutes,
  // },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
