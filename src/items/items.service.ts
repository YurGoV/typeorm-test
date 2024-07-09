import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { EntityManager, Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const item = new Item(createItemDto);
    return await this.entityManager.save(item);
    //return 'This action adds a new item';
  }

  async findAll() {
    return await this.itemRepository.find();
    //return `This action returns all items`;
  }

  async findOne(id: number) {
    return await this.itemRepository.findOneBy({ id });
    //return `This action returns a #${id} item`;
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const item = await this.itemRepository.findOneBy({ id });
    if (!item) {
      throw new NotFoundException(`Item with id ${id} not found`);
    }
    Object.assign(item, updateItemDto);
    return this.itemRepository.save(item);
    //return `This action updates a #${id} item`;
  }

  async remove(id: number) {
    await this.itemRepository.delete(id);
    //return `This action removes a #${id} item`;
  }
}
