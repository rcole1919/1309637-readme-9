export { Entity } from './base/entity';

export type { User } from './types/user.interface';
export type { BlogPost } from './types/blog-post.interface';
export type {
  BlogPostCiteContent,
  BlogPostLinkContent,
  BlogPostPhotoContent,
  BlogPostTextContent,
  BlogPostVideoContent,
} from './types/blog-post-content.type';
export type { Comment } from './types/comment.interface';
export type { Like } from './types/like.interface';
export type { AuthUser } from './types/auth-user.interface';
export type { StorableEntity } from './types/storable-entity.interface';
export type { EntityFactory } from './types/entity-factory.interface';
export type { MongoConfig } from './types/mongo-config.interface';
export type { ApplicationConfig } from './types/application-config.interface';
export type { SortDirection } from './types/sort-direction.enum';
export type { PaginationResult } from './types/pagination.interface';

export {
  SALT_ROUNDS,
  AUTH_USER_MESSAGE,
  AUTH_RESPONSE_MESSAGE,
  AUTH_VALIDATE_MESSAGE,
  USER_NAME_LENGTH,
  USER_PASSWORD_LENGTH,
} from './constants/user';

export {
  ENTITY_NOT_FOUND,
  DEFAULT_PORT,
  APP_ENVIRONMENTS,
  RADIX,
} from './constants/common';

export {
  MONGO_ENV_VALIDATION_MESSAGE,
  MONGO_PORT,
} from './constants/mongo';

export {
  MAX_LIKES_LIMIT,
  MAX_TAGS,
  YOUTUBE_REGEX,
  POST_CITE_AUTHOR_LENGTH,
  POST_CITE_TEXT_LENGTH,
  POST_LINK_DESCRIPTION_LENGTH,
  POST_TEXT_TEASER_LENGTH,
  POST_TEXT_TEXT_LENGTH,
  POST_TEXT_TITLE_LENGTH,
  POST_VIDEO_TITLE_LENGTH,
  POST_VALIDATE_MESSAGE,
  COMMENT_TEXT_LENGTH,
} from './constants/blog';
