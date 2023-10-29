import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserRepository } from './user.repository';
import { EntitySchema } from 'typeorm';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [forwardRef(() => AuthModule)],
  providers: [UserResolver, UserService, UserRepository, EntitySchema],
  exports: [UserService],
})
export class UserModule {}
