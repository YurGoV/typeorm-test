import { CreateCommentDto } from './create-comment.dto';

export class UpdateItemDto {
  type: boolean;
  comments: CreateCommentDto[];
}
