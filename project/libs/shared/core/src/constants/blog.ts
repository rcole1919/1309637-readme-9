import { SortDirection } from '../types/sort-direction.enum';

export const MAX_LIKES_LIMIT = 10;

export const MAX_TAGS = 8;

export const YOUTUBE_REGEX = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/gm;

export const POST_CITE_TEXT_LENGTH = {
  MIN: 20,
  MAX: 300,
} as const;

export const POST_CITE_AUTHOR_LENGTH = {
  MIN: 3,
  MAX: 50,
} as const;

export const POST_VIDEO_TITLE_LENGTH = {
  MIN: 20,
  MAX: 50,
} as const;

export const POST_TEXT_TITLE_LENGTH = {
  MIN: 20,
  MAX: 50,
} as const;

export const POST_TEXT_TEASER_LENGTH = {
  MIN: 50,
  MAX: 225,
} as const;

export const POST_TEXT_TEXT_LENGTH = {
  MIN: 100,
  MAX: 1024,
} as const;

export const POST_LINK_DESCRIPTION_LENGTH = {
  MIN: 0,
  MAX: 300,
} as const;

export const POST_VALIDATE_MESSAGE = {
  YOUTUBE_LINK_NOT_VALID: 'The youtube video link is not valid',
} as const;

export const COMMENT_TEXT_LENGTH = {
  MIN: 10,
  MAX: 300,
} as const;

export const DEFAULT_POST_COUNT_LIMIT = 25;
export const DEFAULT_SORT_DIRECTION = SortDirection.Desc;
export const DEFAULT_PAGE_COUNT = 1;
