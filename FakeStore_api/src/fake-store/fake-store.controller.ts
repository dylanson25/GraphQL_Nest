import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FakeStoreService } from './fake-store.service';
import { CreateFakeStoreDto } from './dto/create-fake-store.dto';
import { UpdateFakeStoreDto } from './dto/update-fake-store.dto';
import { FakeStore } from './entities/fake-store.entity';

@Controller('fake-store/products')
export class FakeStoreController {
  constructor(private readonly fakeStoreService: FakeStoreService) {}

  @Post()
  create(@Body() createFakeStoreDto: CreateFakeStoreDto): FakeStore {
    return this.fakeStoreService.create(createFakeStoreDto);
  }

  @Get()
  findAll() {
    return this.fakeStoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fakeStoreService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFakeStoreDto: UpdateFakeStoreDto,
  ) {
    return this.fakeStoreService.update(+id, updateFakeStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fakeStoreService.remove(+id);
  }
}
