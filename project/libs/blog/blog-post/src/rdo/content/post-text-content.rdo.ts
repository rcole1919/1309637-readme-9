import { Expose } from 'class-transformer';

export class PostTextContentRDO {
  @Expose()
  title!: string;

  @Expose()
  teaser!: string;

  @Expose()
  text!: string;
}