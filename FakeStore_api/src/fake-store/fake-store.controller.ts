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
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('fake-store/products')
@Controller('fake-store/products')
export class FakeStoreController {
  constructor(private readonly fakeStoreService: FakeStoreService) {}

  @Post()
  @ApiCreatedResponse({ status: 201, type: FakeStore })
  create(@Body() createFakeStoreDto: CreateFakeStoreDto): FakeStore {
    return this.fakeStoreService.create(createFakeStoreDto);
  }

  @Get()
  @ApiCreatedResponse({ status: 200, type: [FakeStore] })
  findAll() {
    return this.fakeStoreService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ status: 200, type: FakeStore })
  findOne(@Param('id') id: string) {
    return this.fakeStoreService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ status: 200, type: FakeStore })
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
