import { IsString } from 'class-validator';

export class PostTextContentDTO {
  @IsString()
  title!: string;

  @IsString()
  teaser!: string;

  @IsString()
  text!: string;
}