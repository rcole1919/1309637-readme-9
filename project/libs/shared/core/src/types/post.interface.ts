import { PostType } from './post-type.enum';
import { Comment } from './comment.interface';
import { Like } from './like.interface';

export interface Post {
  id?: string;
  type: PostType;
  createdAt?: Date;
  updatedAt?: Date;
  tags: string[];
  userId: string;
  content: {
    videoUrl?: string;
    title?: string;
    text?: string;
    teaser?: string;
    citeAuthor?: string;
    cite?: string;
    photoUrl?: string;
  };
  likes: Like[];
  comments: Comment[];
}
