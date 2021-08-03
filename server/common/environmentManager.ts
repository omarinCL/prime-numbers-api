import dotenv from 'dotenv';
import { name } from '../../package.json';

dotenv.config();

export const port = Number(process.env.PORT || 8085);
export const appId = process.env.APP_ID || name;
export const nodeEnv = process.env.NODE_ENV || 'development';
export const basePath = process.env.BASE_PATH || '/api/v1';
export const logLevel = process.env.LOG_LEVEL || 'info';
export const requestLimit = process.env.REQUEST_LIMIT || '100kb';
export const swaggerApiSpec = process.env.SWAGGER_API_SPEC || '/spec';
