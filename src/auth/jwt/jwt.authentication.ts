import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  /*   async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const gqlContext = GqlExecutionContext.create(context);
      const ctx = gqlContext.getContext();
      const authHeader = ctx.req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer ')) throw new BadRequestException('Token must be provided');
      const token = authHeader.split(' ')[1];
      const user = await this.authService.decodeToken(token);

      if (!user) throw new UnauthorizedException('Unauthorized');

      gqlContext.getContext().user = user;
      return true;
    } catch (error) {
      throw new Error(error);
    }
  } */
}
