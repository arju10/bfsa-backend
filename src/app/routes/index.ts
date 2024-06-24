// Application routes

import express from 'express';
import { TestRoutes } from '../modules/test/test.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/test',
    route: TestRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
