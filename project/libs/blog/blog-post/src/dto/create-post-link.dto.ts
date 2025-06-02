import { IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PostLinkContentDTO } from './content/post-link-content.dto';
import { CreatePostDTO } from './abstract/create-post.dto';

export class CreatePostLinkDTO extends CreatePostDTO {
  @ValidateNested()
  @IsObject()
  @Type(() => PostLinkContentDTO)
  public content!: PostLinkContentDTO;
}