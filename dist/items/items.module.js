"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsModule = void 0;
const common_1 = require("@nestjs/common");
const items_service_1 = require("./items.service");
const items_controller_1 = require("./items.controller");
const typeorm_1 = require("@nestjs/typeorm");
const item_entity_1 = require("./entities/item.entity");
const typeorm_2 = require("typeorm");
const listing_entity_1 = require("./entities/listing.entity");
const comment_entity_1 = require("./entities/comment.entity");
const tag_entity_1 = require("./entities/tag.entity");
let ItemsModule = class ItemsModule {
};
exports.ItemsModule = ItemsModule;
exports.ItemsModule = ItemsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([item_entity_1.Item, listing_entity_1.Listing, comment_entity_1.Comment, tag_entity_1.Tag])],
        controllers: [items_controller_1.ItemsController],
        providers: [items_service_1.ItemsService, typeorm_2.Repository],
    })
], ItemsModule);
//# sourceMappingURL=items.module.js.map