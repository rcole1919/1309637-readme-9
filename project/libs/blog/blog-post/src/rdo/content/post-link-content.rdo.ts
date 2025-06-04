import { Expose } from 'class-transformer';

export class PostLinkContentRDO {
  @Expose()
  link!: string;

  @Expose()
  description!: string;
}