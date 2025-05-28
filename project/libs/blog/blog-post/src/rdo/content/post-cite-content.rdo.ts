import { Expose } from 'class-transformer';

export class PostCiteContentRDO {
  @Expose()
  citeAuthor!: string;

  @Expose()
  text!: string;
}