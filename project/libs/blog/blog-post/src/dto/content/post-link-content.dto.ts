import { IsString, Length, IsUrl } from 'class-validator';
import { POST_LINK_DESCRIPTION_LENGTH } from '@project/core';

export class PostLinkContentDTO {
  @IsUrl()
  link!: string;

  @IsString()
  @Length(POST_LINK_DESCRIPTION_LENGTH.MIN, POST_LINK_DESCRIPTION_LENGTH.MAX)
  description!: string;
}