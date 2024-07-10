import { AbstractEntity } from 'src/database/abstract.entity';
import { Item } from './item.entity';
export declare class Comment extends AbstractEntity<Comment> {
    content: string;
    item: Item;
}
