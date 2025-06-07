import { CreatePostLinkDTO } from '../create-post-link.dto';
import { CreatePostCiteDTO } from '../create-post-cite.dto';
import { CreatePostPhotoDTO } from '../create-post-photo.dto';
import { CreatePostVideoDTO } from '../create-post-video.dto';
import { CreatePostTextDTO } from '../create-post-text.dto';

export type CreatePostDTO =
  CreatePostCiteDTO |
  CreatePostLinkDTO |
  CreatePostPhotoDTO |
  CreatePostVideoDTO |
  CreatePostTextDTO;
