import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import * as HttpStatus from 'http-status-codes';
import routes from './routes';
import AppError from './errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  /* Minimun of global error handling ensuring our app will never let an unhandled exception break. */
  return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    status: 'error',
    message: 'Internal server error.',
  });
});

export default app;
