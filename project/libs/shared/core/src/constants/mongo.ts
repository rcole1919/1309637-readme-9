export const MONGO_MIN_PORT = 0;
export const MONGO_MAX_PORT = 65535;
export const DEFAULT_MONGO_PORT = 27017;

export const MONGO_ENV_VALIDATION_MESSAGE = {
  DB_HOST_REQUIRED: 'MongoDB host is required',
  DB_NAME_REQUIRED: 'Database name is required',
  DB_PORT_REQUIRED: 'MongoDB port is required',
  DB_USER_REQUIRED: 'MongoDB user is required',
  DB_PASSWORD_REQUIRED: 'MongoDB password is required',
  DB_AUTH_BASE_REQUIRED: 'MongoDB authentication base is required',
} as const;
