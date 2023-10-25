import { Module, forwardRef } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { ManagerResolver } from './manager.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagerRepository } from './manager.repository';
import { Manager } from './entities/manager.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([ManagerRepository, Manager]), forwardRef(() => AuthModule)],
  providers: [ManagerResolver, ManagerService, ManagerRepository],
  exports: [ManagerService],
})
export class ManagerModule {}
