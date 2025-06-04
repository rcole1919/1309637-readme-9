import { Expose } from 'class-transformer';

export class PostPhotoContentRDO {
  @Expose()
  photoUrl!: string;
}