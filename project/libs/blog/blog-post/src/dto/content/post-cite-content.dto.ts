import { IsString } from 'class-validator';

export class PostCiteContentDTO {
  @IsString()
  citeAuthor!: string;

  @IsString()
  text!: string;
}