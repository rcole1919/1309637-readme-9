import { Prisma, $Enums } from '@prisma/client';

import { Comment } from './comment.interface';
import { Like } from './like.interface';

export interface BlogPost {
  id?: string;
  type: $Enums.PostType;
  createdAt?: Date;
  updatedAt?: Date;
  isPublished?: boolean;
  repostId?: string;
  repostAuthorId?: string;
  tags: string[];
  userId: string;
  content: Prisma.JsonValue;
  likes: Like[];
  comments: Comment[];
}
