export const DEFAULT_NOTIFY_PORT = {
  RABBIT: 5672,
  SERVICE: 3002,
  SMTP: 25,
} as const;

export const SUBSCRIBER_VALIDATE_MESSAGE = {
  EMAIL_NOT_VALID: 'The email is not valid',
  NAME_IS_EMPTY: 'The name is empty',
} as const;


export const EMAIL_ADD_SUBSCRIBER_SUBJECT = 'Подписка на рассылку оформлена';
