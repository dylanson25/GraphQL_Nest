import { Module } from '@nestjs/common';
import { FakeStoreService } from './fake-store.service';
import { FakeStoreController } from './fake-store.controller';

@Module({
  controllers: [FakeStoreController],
  providers: [FakeStoreService],
})
export class FakeStoreModule {}
