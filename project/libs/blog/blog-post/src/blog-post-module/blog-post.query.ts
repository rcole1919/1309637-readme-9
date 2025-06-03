import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';

import {
  DEFAULT_PAGE_COUNT,
  DEFAULT_POST_COUNT_LIMIT,
  BlogPostSortType,
} from '@project/core';

export class BlogPostQuery {
  @Transform(({ value }) => +value || DEFAULT_POST_COUNT_LIMIT)
  @IsNumber()
  @IsOptional()
  public limit = DEFAULT_POST_COUNT_LIMIT;

  @IsEnum(BlogPostSortType)
  @IsOptional()
  public sortType = BlogPostSortType.Date;

  @Transform(({ value }) => +value || DEFAULT_PAGE_COUNT)
  @IsNumber()
  @IsOptional()
  public page = DEFAULT_PAGE_COUNT;
}