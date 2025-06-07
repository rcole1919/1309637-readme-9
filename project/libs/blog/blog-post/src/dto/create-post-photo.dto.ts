import { IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PostPhotoContentDTO } from './content/post-photo-content.dto';
import { CreatePostDTO } from './abstract/create-post.dto';

export class CreatePostPhotoDTO extends CreatePostDTO {
  @ValidateNested()
  @IsObject()
  @Type(() => PostPhotoContentDTO)
  public content!: PostPhotoContentDTO;
}