import { IsString, Matches, Length } from 'class-validator';
import { POST_VALIDATE_MESSAGE, YOUTUBE_REGEX, POST_VIDEO_TITLE_LENGTH } from '@project/core';

export class PostVideoContentDTO {
  @IsString()
  @Matches(YOUTUBE_REGEX, { message: POST_VALIDATE_MESSAGE.YOUTUBE_LINK_NOT_VALID })
  videoUrl!: string;

  @IsString()
  @Length(POST_VIDEO_TITLE_LENGTH.MIN, POST_VIDEO_TITLE_LENGTH.MAX)
  title!: string;
}