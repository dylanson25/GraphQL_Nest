import { PartialType } from '@nestjs/mapped-types';
import { CreateFakeStoreDto } from './create-fake-store.dto';

export class UpdateFakeStoreDto extends PartialType(CreateFakeStoreDto) {}
