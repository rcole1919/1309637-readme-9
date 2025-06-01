import { IsString, Length } from 'class-validator';
import { POST_TEXT_TEASER_LENGTH, POST_TEXT_TEXT_LENGTH, POST_TEXT_TITLE_LENGTH } from '@project/core';

export class PostTextContentDTO {
  @IsString()
  @Length(POST_TEXT_TITLE_LENGTH.MIN, POST_TEXT_TITLE_LENGTH.MAX)
  title!: string;

  @IsString()
  @Length(POST_TEXT_TEASER_LENGTH.MIN, POST_TEXT_TEASER_LENGTH.MAX)
  teaser!: string;

  @IsString()
  @Length(POST_TEXT_TEXT_LENGTH.MIN, POST_TEXT_TEXT_LENGTH.MAX)
  text!: string;
}