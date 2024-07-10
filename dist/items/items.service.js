"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const item_entity_1 = require("./entities/item.entity");
const typeorm_2 = require("@nestjs/typeorm");
const listing_entity_1 = require("./entities/listing.entity");
const tag_entity_1 = require("./entities/tag.entity");
let ItemsService = class ItemsService {
    constructor(itemRepository, entityManager) {
        this.itemRepository = itemRepository;
        this.entityManager = entityManager;
    }
    async create(createItemDto) {
        const listing = new listing_entity_1.Listing({
            ...createItemDto.listing,
            rating: 0,
        });
        const tags = createItemDto.tags.map((createTagDto) => new tag_entity_1.Tag(createTagDto));
        const item = new item_entity_1.Item({
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
    }
    async findOne(id) {
        return await this.itemRepository.findOne({
            where: { id },
            relations: { listing: true, comments: true, tags: true },
        });
    }
    async update(id, updateItemDto) {
        const item = await this.itemRepository.findOneBy({ id });
        if (!item) {
            throw new common_1.NotFoundException(`Item with id ${id} not found`);
        }
        Object.assign(item, updateItemDto);
        return this.itemRepository.save(item);
    }
    async remove(id) {
        await this.itemRepository.delete(id);
    }
};
exports.ItemsService = ItemsService;
exports.ItemsService = ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(item_entity_1.Item)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.EntityManager])
], ItemsService);
//# sourceMappingURL=items.service.js.map
