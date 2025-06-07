import { Injectable, NotFoundException } from '@nestjs/common';
import { $Enums } from '@prisma/client';

import { BlogPostRepository } from './blog-post.repository';
import { BlogPostEntity } from './blog-post.entity';
import { BlogPostFactory } from './blog-post.factory';
import { CreatePostDTO } from '../dto/types/post-dto.type';
import { BlogPostQuery } from './blog-post.query';
import { PaginationResult } from '@project/core';

@Injectable()
export class BlogPostService {
  constructor(
    private readonly blogPostRepository: BlogPostRepository,
  ) {}

  public async createPost(dto: CreatePostDTO, type: $Enums.PostType): Promise<BlogPostEntity> {
    const newPost = BlogPostFactory.createFromCreatePostDTO(dto, type);
    await this.blogPostRepository.save(newPost);
    return newPost;
  }

  public async getAllPosts(query?: BlogPostQuery): Promise<PaginationResult<BlogPostEntity | null>> {
    return this.blogPostRepository.find(query);
  }

  public async deletePost(id: string): Promise<void> {
    try {
      await this.blogPostRepository.deleteById(id);
    } catch {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
  }

  public async getPost(id: string): Promise<BlogPostEntity | null> {
    return this.blogPostRepository.findById(id);
  }
}