import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';

import { BlogLikeRepository } from './blog-like.repository';
import { CreateLikeDTO } from '../dto/create-like.dto';
import { BlogLikeEntity } from './blog-like.entity';
import { BlogLikeFactory } from './blog-like.factory';

@Injectable()
export class BlogLikeService {
  constructor(
    private readonly blogLikeRepository: BlogLikeRepository,
  ) {}

  public async createLike(dto: CreateLikeDTO): Promise<BlogLikeEntity> {
    const existsLike = (await this.blogLikeRepository.find({
      postId: dto.postId,
      userId: dto.userId,
    })).at(0);

    if (existsLike) {
      throw new ConflictException(`A like with the ${dto.postId} and ${dto.userId} already exists`);
    }

    const newLike = BlogLikeFactory.createFromCreateLikeDTO(dto);

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