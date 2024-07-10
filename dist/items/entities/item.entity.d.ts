import { Listing } from './listing.entity';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Comment } from './comment.entity';
import { Tag } from './tag.entity';
export declare class Item extends AbstractEntity<Item> {
    name: string;
    public: boolean;
    listing: Listing;
    comments: Comment[];
    tags: Tag[];
}
