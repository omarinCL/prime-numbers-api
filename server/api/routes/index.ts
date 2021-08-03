import { Application } from 'express';
import primeNumbersRoutes from './primeNumbersRoutes';
import { basePath } from '../../common/environmentManager';

export default function routes(app: Application): void {
  app.use(`${basePath}/`, [primeNumbersRoutes]);
}
