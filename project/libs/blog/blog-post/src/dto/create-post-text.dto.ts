import { IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PostTextContentDTO } from './content/post-text-content.dto';
import { CreatePostDTO } from './abstract/create-post.dto';

export class CreatePostTextDTO extends CreatePostDTO {
  @ValidateNested()
  @IsObject()
  @Type(() => PostTextContentDTO)
  public content!: PostTextContentDTO;
}