import { PostLinkRDO } from '../post-link.rdo';
import { PostCiteRDO } from '../post-cite.rdo';
import { PostPhotoRDO } from '../post-photo.rdo';
import { PostVideoRDO } from '../post-video.rdo';
import { PostTextRDO } from '../post-text.rdo';

export type PostRDO =
  PostCiteRDO |
  PostLinkRDO |
  PostPhotoRDO |
  PostVideoRDO |
  PostTextRDO;
