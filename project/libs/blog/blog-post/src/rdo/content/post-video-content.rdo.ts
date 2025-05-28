import { Expose } from 'class-transformer';

export class PostVideoContentRDO {
  @Expose()
  videoUrl!: string;

  @Expose()
  title!: string;
}