import { $Enums } from '@prisma/client';
import { fillDTO } from '@project/helpers';
import { PostVideoRDO } from '../rdo/post-video.rdo';
import { PostCiteRDO } from '../rdo/post-cite.rdo';
import { PostTextRDO } from '../rdo/post-text.rdo';
import { PostPhotoRDO } from '../rdo/post-photo.rdo';
import { PostLinkRDO } from '../rdo/post-link.rdo';
import { BlogPostEntity } from './blog-post.entity';

export function blogPostRDOSelect(post: BlogPostEntity | null, type: $Enums.PostType | undefined) {
  switch (type) {
    case $Enums.PostType.video:
      return fillDTO(PostVideoRDO, post?.toPOJO());

    case $Enums.PostType.cite:
      return fillDTO(PostCiteRDO, post?.toPOJO());

    case $Enums.PostType.text:
      return fillDTO(PostTextRDO, post?.toPOJO());

    case $Enums.PostType.photo:
      return fillDTO(PostPhotoRDO, post?.toPOJO());

    case $Enums.PostType.link:
      return fillDTO(PostLinkRDO, post?.toPOJO());

    default:
      return;
  }
}