import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Not authorized');
    }
    const token = authHeader.split(' ');
    if (token[0] !== 'Bearer') {
      throw new UnauthorizedException('Not authorized');
    }

    try {
      const decoded = verify(token[1], process.env.SECRET);
      req.headers['user'] = JSON.stringify(decoded);
      next();
    } catch (err) {
      throw new UnauthorizedException('Not authorized');
    }
  }
}
