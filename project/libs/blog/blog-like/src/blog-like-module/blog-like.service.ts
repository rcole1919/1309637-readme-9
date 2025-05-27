import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';

import { BlogLikeRepository } from './blog-like.repository';
import { CreateLikeDTO } from '../dto/create-like.dto';
import { BlogLikeEntity } from './blog-like.entity';

@Injectable()
export class BlogLikeService {
  constructor(
    private readonly blogLikeRepository: BlogLikeRepository,
  ) {}

  public async createLike(dto: CreateLikeDTO): Promise<BlogLikeEntity> {
    const existslike = (await this.blogLikeRepository.find({
      postId: dto.postId,
      userId: dto.userId,
    })).at(0);

    if (existslike) {
      throw new ConflictException(`A like with the ${dto.postId} and ${dto.userId} already exists`);
    }

    const newLike = new BlogLikeEntity(dto);

    await this.blogLikeRepository.save(newLike);

    return newLike;
  }

  public async deleteLike(dto: CreateLikeDTO): Promise<void> {
    const existslike = (await this.blogLikeRepository.find({
      postId: dto.postId,
      userId: dto.userId,
    })).at(0);

    if (!existslike) {
      throw new NotFoundException(`A like with the ${dto.postId} and ${dto.userId} not found`);
    }

    await this.blogLikeRepository.deleteById(existslike.id)
  }
}