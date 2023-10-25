import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  /**

This method checks if the user is authorized to access the requested resource.
It extracts the input argument from the GraphQL context and sends it to the auth service
for validation. If the user is validated, it sets the user object in the context
for downstream use.
@param context The execution context for the current request.
@returns A Promise that resolves to a boolean indicating if the user is authorized.
*/
  /*   async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlContext = GqlExecutionContext.create(context);
    const { credentials } = gqlContext.getArgs();
    // Validate the user credentials
    const user = await this.authService.validate(credentials);

    // If the user is not authenticated, return false
    if (!user) return false;

    // Set the authenticated user in the context for downstream use
    gqlContext.getContext().user = user;
    return true;
  } */
}
