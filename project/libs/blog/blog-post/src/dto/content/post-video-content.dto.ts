import { IsString } from 'class-validator';

export class PostVideoContentDTO {
  @IsString()
  videoUrl!: string;

  @IsString()
  title!: string;
}