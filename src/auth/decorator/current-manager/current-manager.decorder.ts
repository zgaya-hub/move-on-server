import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GqlExecutionContext } from '@nestjs/graphql';

export interface ManagerAuth extends Omit<CanActivate, 'canActivate'> {
  canActivate(context: ExecutionContext): CurrentManagerType;
}

@Injectable()
export class ManagerAuthentor implements ManagerAuth {
  // constructor(private readonly authService: AuthService) {}
  canActivate(context: ExecutionContext): CurrentManagerType {
    const jwtService = new JwtService();

    const gqlContext = GqlExecutionContext.create(context);
    const ctx = gqlContext.getContext();

    const authHeader = ctx.req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) throw new BadRequestException('Unauthenticated');

    const token = authHeader.split(' ')[1];

    const decodedManager: TokenUserType = jwtService.decode(token) as TokenUserType;

    return decodedManager;
  }
}
