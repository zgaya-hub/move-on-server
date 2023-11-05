import { BadRequestException, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtUserAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    const gqlContext = GqlExecutionContext.create(context);
    const ctx = gqlContext.getContext();

    const authHeader = ctx.req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) throw new BadRequestException('Invalid authorization specified');

    const token = authHeader.split(' ')[1];

    const tokenUser: TokenUserType = this.authService.decodeToken(token);
    if (!tokenUser) throw new UnauthorizedException('Invalid authorization specified');

    await this.authService.authenticateUser(tokenUser.email);

    return true;
  }
}
