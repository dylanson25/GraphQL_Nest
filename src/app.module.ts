import { Module } from '@nestjs/common';
import { FakeStoreModule } from './fake-store/fake-store.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [FakeStoreModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
