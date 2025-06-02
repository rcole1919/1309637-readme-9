import { Type, Expose } from 'class-transformer';
import { PostPhotoContentRDO } from './content/post-photo-content.rdo';
import { PostRDO } from './abstract/post.rdo';

export class PostPhotoRDO extends PostRDO {
  @Expose()
  @Type(() => PostPhotoContentRDO)
  public content!: PostPhotoContentRDO;
}