import { Type, Expose } from 'class-transformer';
import { PostTextContentRDO } from './content/post-text-content.rdo';
import { PostRDO } from './abstract/post.rdo';

export class PostTextRDO extends PostRDO {
  @Expose()
  @Type(() => PostTextContentRDO)
  public content!: PostTextContentRDO;
}