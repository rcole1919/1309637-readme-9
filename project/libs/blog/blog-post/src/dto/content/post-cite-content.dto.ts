import { IsString, Length } from 'class-validator';
import { POST_CITE_AUTHOR_LENGTH, POST_CITE_TEXT_LENGTH } from '@project/core'; 

export class PostCiteContentDTO {
  @IsString()
  @Length(POST_CITE_AUTHOR_LENGTH.MIN, POST_CITE_AUTHOR_LENGTH.MAX)
  citeAuthor!: string;

  @IsString()
  @Length(POST_CITE_TEXT_LENGTH.MIN, POST_CITE_TEXT_LENGTH.MAX)
  text!: string;
}