import express, { Application } from 'express';
import { Express } from 'express-serve-static-core';
import actuator from 'express-actuator';
import path from 'path';
import http from 'http';
import cors from 'cors';
import * as validator from 'express-openapi-validator';
import logger from './logger';
import 'reflect-metadata';
import {
  nodeEnv,
  requestLimit,
  swaggerApiSpec,
} from './environmentManager';
import errorHandler from '../middleware/errorHandler';
import requestHandler from '../middleware/requestHandler';

export default class ExpressServer {
  private routes: (app: Application) => void;

  private app: Express;

  constructor() {
    this.app = express();
  }

  private initMiddleware() {
    const root = path.normalize(`${__dirname}/../..`);
    const apiSpec = path.join(root, 'server/apispec.yml');
    this.app.disable('x-powered-by');
    this.app.use(express.json({ limit: requestLimit || '100kb' }));
    this.app.use(express.urlencoded({ extended: true, limit: requestLimit || '100kb' }));
    this.app.use(express.text({ limit: requestLimit || '100kb' }));
    this.app.use(actuator());
    this.app.use('/', express.static(`${root}/public/swaggerUI`));
    this.app.use(swaggerApiSpec, express.static(apiSpec));
    this.app.use(cors());
    this.app.use(validator.middleware({
      apiSpec,
      validateRequests: false,
      validateSecurity: false,
    }));
    this.app.use(requestHandler);
    this.routes(this.app);
    this.app.use(errorHandler);
  }

  router(routes: (app: Application) => void): ExpressServer {
    this.routes = routes;
    return this;
  }

  listen(port: number) {
    try {
      this.initMiddleware();
      http.createServer(this.app).listen(port);
      logger().info(`Server up and running in ${nodeEnv || 'development'} on port ${port}`);
    } catch (error) {
      logger().error(error);
      process.exit(1);
    }

    return this.app;
  }
}
