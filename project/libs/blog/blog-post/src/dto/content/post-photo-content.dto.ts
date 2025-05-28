import { IsString } from 'class-validator';

export class PostPhotoContentDTO {
  @IsString()
  photoUrl!: string;
}