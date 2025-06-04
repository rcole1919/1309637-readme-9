import { Injectable, NotFoundException } from '@nestjs/common';

import { BlogCommentRepository } from './blog-comment.repository';
import { CreateCommentDTO } from '../dto/create-comment.dto';
import { BlogCommentEntity } from './blog-comment.entity';
import { BlogCommentFactory } from './blog-comment.factory';

@Injectable()
export class BlogCommentService {
  constructor(
    private readonly blogCommentRepository: BlogCommentRepository,
  ) {}

  public async createComment(dto: CreateCommentDTO): Promise<BlogCommentEntity> {
    const newComment = BlogCommentFactory.createFromCreateCommentDTO(dto);
    await this.blogCommentRepository.save(newComment);

    return newComment;
  }

  public async getComments(postId: string): Promise<(BlogCommentEntity | null)[]> {
    return await this.blogCommentRepository.findManyByPostId(postId);
  }

  public async deleteComment(id: string): Promise<void> {
    const existsComment = await this.blogCommentRepository.findById(id)

    if (!existsComment) {
      throw new NotFoundException(`A comment with the ${id} not found`);
    }

    await this.blogCommentRepository.deleteById(id)
  }
}