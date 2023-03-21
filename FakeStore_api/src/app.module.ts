import { Module } from '@nestjs/common';
import { FakeStoreModule } from './fake-store/fake-store.module';

@Module({
  imports: [FakeStoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
