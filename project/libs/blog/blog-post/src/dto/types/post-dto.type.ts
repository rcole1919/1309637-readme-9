import { PostLinkDTO } from '../post-link.dto';
import { PostCiteDTO } from '../post-cite.dto';
import { PostPhotoDTO } from '../post-photo.dto';
import { PostVideoDTO } from '../post-video.dto';
import { PostTextDTO } from '../post-text.dto';

export type PostDTO =
  PostCiteDTO |
  PostLinkDTO |
  PostPhotoDTO |
  PostVideoDTO |
  PostTextDTO;
