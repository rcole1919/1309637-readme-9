import { Expose } from 'class-transformer';
import type { PostRDO } from './types/post-rdo.type';

export class PostWithPaginationRDO {
  @Expose()
  public entities!: PostRDO[];

  @Expose()
  public totalPages!: number;

  @Expose()
  public totalItems!: number;

  @Expose()
  public currentPage!: number;

  @Expose()
  public itemsPerPage!: number;
}
