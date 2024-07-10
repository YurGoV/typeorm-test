import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateItemDto } from './dto/update-item.dto';
import { EntityManager, Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Listing } from './entities/listing.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createItemDto: CreateItemDto) {
    // TODO: can do as in update (via Object.assign)? what is the difference?
    const listing = new Listing({
      ...createItemDto.listing,
      rating: 0,
    });
    const tags = createItemDto.tags.map(
      (createTagDto) => new Tag(createTagDto),
    );
    const item = new Item({
      ...createItemDto,
      comments: [],
      listing,
      tags,
    });
    return await this.entityManager.save(item);
  }

  async findAll() {
    return await this.itemRepository.find({
      relations: { listing: true, comments: true, tags: true },
    });
    //return `This action returns all items`;
  }

  async findOne(id: number) {
    return await this.itemRepository.findOne({
      where: { id },
      relations: { listing: true, comments: true, tags: true },
    });
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
