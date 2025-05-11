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
