import { BadRequestException, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtManagerAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    const gqlContext = GqlExecutionContext.create(context);
    const ctx = gqlContext.getContext();

    const authHeader = ctx.req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) throw new BadRequestException('Invalid authorization specified');

    const token = authHeader.split(' ')[1];

    const tokenManager: TokenUserType = this.authService.decodeToken(token);
    if (!tokenManager) throw new UnauthorizedException('Invalid authorization specified');

    await this.authService.authenticateManager(tokenManager.email);

    return true;
  }
}
