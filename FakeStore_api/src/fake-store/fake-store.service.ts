import { Injectable } from '@nestjs/common';
import { CreateFakeStoreDto } from './dto/create-fake-store.dto';
import { UpdateFakeStoreDto } from './dto/update-fake-store.dto';

@Injectable()
export class FakeStoreService {
  create(createFakeStoreDto: CreateFakeStoreDto) {
    return 'This action adds a new fakeStore';
  }

  findAll() {
    return `This action returns all fakeStore`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fakeStore`;
  }

  update(id: number, updateFakeStoreDto: UpdateFakeStoreDto) {
    return `This action updates a #${id} fakeStore`;
  }

  remove(id: number) {
    return `This action removes a #${id} fakeStore`;
  }
}
