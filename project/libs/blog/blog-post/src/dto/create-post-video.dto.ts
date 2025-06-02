import { IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PostVideoContentDTO } from './content/post-video-content.dto';
import { CreatePostDTO } from './abstract/create-post.dto';

export class CreatePostVideoDTO extends CreatePostDTO {
  @ValidateNested()
  @IsObject()
  @Type(() => PostVideoContentDTO)
  public content!: PostVideoContentDTO;
}