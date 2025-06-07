export const MONGO_PORT = {
  MIN: 0,
  MAX: 65535,
  DEFAULT: 27017,
} as const;

export const MONGO_ENV_VALIDATION_MESSAGE = {
  DB_HOST_REQUIRED: 'MongoDB host is required',
  DB_NAME_REQUIRED: 'Database name is required',
  DB_PORT_REQUIRED: 'MongoDB port is required',
  DB_USER_REQUIRED: 'MongoDB user is required',
  DB_PASSWORD_REQUIRED: 'MongoDB password is required',
  DB_AUTH_BASE_REQUIRED: 'MongoDB authentication base is required',
} as const;

export const BAD_MONGO_ID_ERROR = 'Bad entity ID';
