import { Type, Expose } from 'class-transformer';
import { PostVideoContentRDO } from './content/post-video-content.rdo';
import { PostRDO } from './abstract/post.rdo';

export class PostVideoRDO extends PostRDO {
  @Expose()
  @Type(() => PostVideoContentRDO)
  public content!: PostVideoContentRDO;
}