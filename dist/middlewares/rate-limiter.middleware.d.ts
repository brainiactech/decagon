import { RequestWithUser } from '../interfaces/auth.interface';
import { NextFunction, Response } from 'express';
declare const rateLimiterMiddleware: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
export default rateLimiterMiddleware;
