import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFakeStoreDto } from './dto/create-fake-store.dto';
import { UpdateFakeStoreDto } from './dto/update-fake-store.dto';
import { FakeStore } from './entities/fake-store.entity';
import { fakeStoreData } from './fakeStore_data';
@Injectable()
export class FakeStoreService {
  create({ description, image, price, title }: CreateFakeStoreDto): FakeStore {
    const newItem = new FakeStore();
    newItem.id = Math.max(...fakeStoreData.map((item) => item.id), 0) + 1;
    newItem.description = description;
    newItem.image = image;
    newItem.price = price;
    newItem.title = title;
    fakeStoreData.push(newItem);
    return newItem;
  }

  findAll(): FakeStore[] {
    return fakeStoreData;
  }

  findOne(id: number): FakeStore {
    const item = fakeStoreData.find((item) => item.id === id);
    if (!item) throw new NotFoundException(`Item with id ${id} not found`);

    return item;
  }

  update(
    id: number,
    { description, image, price, title }: UpdateFakeStoreDto,
  ): FakeStore {
    fakeStoreData.forEach((item) => {
      if (description) item.description = description;
      if (image) item.image = image;
      if (price) item.price = price;
      if (title) item.title = title;
    });
    return this.findOne(id);
  }

  remove(id: number) {
    return `This action removes a #${id} fakeStore`;
  }
}
