import { Global, Module } from '@nestjs/common';
import { EntitySaveService } from './save.service';

@Global()
@Module({
  providers: [EntitySaveService],
  exports: [EntitySaveService],
})
export class AdapterModule {}
