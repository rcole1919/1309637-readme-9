import { IsString } from 'class-validator';

export class PostLinkContentDTO {
  @IsString()
  link!: string;

  @IsString()
  description!: string;
}