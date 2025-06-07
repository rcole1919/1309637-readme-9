import { IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PostCiteContentDTO } from './content/post-cite-content.dto';
import { CreatePostDTO } from './abstract/create-post.dto';

export class CreatePostCiteDTO extends CreatePostDTO {
  @ValidateNested()
  @IsObject()
  @Type(() => PostCiteContentDTO)
  public content!: PostCiteContentDTO;
}