import { Request, Response, NextFunction } from 'express';
import { performance } from 'perf_hooks';
import { v4 } from 'uuid';
import log from '../common/logger';
import { basePath } from '../common/environmentManager';
import { version } from '../../package.json';

export default function reqIdMiddleware(req: Request, res: Response, next: NextFunction): void {
  const { method, url, path } = req;
  if (path.startsWith(basePath)) {
    const reqId = req.header('x-request-id') || v4();
    const requestStart = performance.now();
    const requestLog = log().child({
      reqId,
      method,
      url,
    });
    requestLog.info({
      msg: 'Incoming request',
      requestBody: req.body,
    });

    res.set('x-api-version', version);
    res.on('finish', () => {
      const { statusCode, statusMessage } = res;
      const responseLog = log().child({
        reqId,
        executionTime: performance.now() - requestStart,
        response: { statusCode, statusMessage },
      });
      responseLog.info('Request completed');
    });

    next();
  } else {
    next();
  }
}
