import { Type, Expose } from 'class-transformer';
import { PostCiteContentRDO } from './content/post-cite-content.rdo';
import { PostRDO } from './abstract/post.rdo';

export class PostCiteRDO extends PostRDO {
  @Expose()
  @Type(() => PostCiteContentRDO)
  public content!: PostCiteContentRDO;
}