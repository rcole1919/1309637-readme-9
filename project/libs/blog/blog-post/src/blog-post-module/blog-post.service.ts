import { Injectable, NotFoundException } from '@nestjs/common';

import { BlogPostRepository } from './blog-post.repository';
import { BlogPostEntity } from './blog-post.entity';
import { BlogPostFactory } from './blog-post.factory';
import { PostDTO } from '../dto/types/post-dto.type';

@Injectable()
export class BlogPostService {
  constructor(
    private readonly blogPostRepository: BlogPostRepository,
  ) {}

  public async createPost(dto: PostDTO): Promise<BlogPostEntity> {
    const newPost = BlogPostFactory.createFromCreatePostDTO(dto);
    await this.blogPostRepository.save(newPost);
    return newPost;
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