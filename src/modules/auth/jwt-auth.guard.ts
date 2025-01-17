import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Invalid token');
    }

    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, 'your_jwt_secret');
      request.user = decoded; // Attach user info to the request
      return true;
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
