import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1/', routes);

// Global Error Handler
app.use(globalErrorHandler);

app.get('/', async (req: Request, res: Response) => {
  res.send('Working successfully');
  // console.log(x)
});
export default app;
