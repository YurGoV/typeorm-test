import { CreateListingDto } from './create-listing.dto';
import { CreateTagDto } from './create-tag.dto';
export declare class CreateItemDto {
    name: string;
    public: boolean;
    listing: CreateListingDto;
    tags: CreateTagDto[];
}
