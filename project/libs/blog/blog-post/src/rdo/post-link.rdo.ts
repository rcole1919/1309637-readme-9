import { Type, Expose } from 'class-transformer';
import { PostLinkContentRDO } from './content/post-link-content.rdo';
import { PostRDO } from './abstract/post.rdo';

export class PostLinkRDO extends PostRDO {
  @Expose()
  @Type(() => PostLinkContentRDO)
  public content!: PostLinkContentRDO;
}