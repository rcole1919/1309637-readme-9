export const SALT_ROUNDS = 10;

export const AUTH_USER_MESSAGE = {
  EXISTS: 'User with this email exists',
  NOT_FOUND: 'User not found',
  PASSWORD_WRONG: 'User password is wrong',
} as const;

export const AUTH_RESPONSE_MESSAGE = {
  LOGGED_SUCCESS: 'User has been successfully logged.',
  LOGGED_ERROR: 'Password or Login is wrong',
  USER_FOUND: 'User found',
  USER_NOT_FOUND: 'User not found',
  USER_EXIST: 'User with the email already exists',
  USER_CREATED: 'The new user has been successfully created.',
} as const;

export const AUTH_VALIDATE_MESSAGE = {
  EMAIL_NOT_VALID: 'The email is not valid',
} as const;

export const USER_NAME_LENGTH = {
  MIN: 3,
  MAX: 50,
} as const;

export const USER_PASSWORD_LENGTH = {
  MIN: 6,
  MAX: 12,
} as const;
