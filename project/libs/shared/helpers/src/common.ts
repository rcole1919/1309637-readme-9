import { ClassTransformOptions, plainToInstance } from 'class-transformer';

import { DateTimeUnit, RADIX, TimeAndUnit, TOKEN_EXPIRES_IN_REG } from '@project/core';

export function fillDTO<T, V>(
  DTOClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions,
): T;

export function fillDTO<T, V extends []>(
  DTOClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions,
): T[];

export function fillDTO<T, V>(
  DTOClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions,
): T | T[] {
  return plainToInstance(DTOClass, plainObject, {
    excludeExtraneousValues: true,
    ...options,
  });
}

export function getMongoConnectionString({
  username,
  password,
  host,
  port,
  dbName,
  authDb,
}: {
  username: string;
  password: string;
  host: string;
  port: string;
  dbName: string;
  authDb: string;
}): string {
  return `mongodb://${username}:${password}@${host}:${port}/${dbName}?authSource=${authDb}`;
}

export function getRabbitMQConnectionString({
  user,
  password,
  host,
  port,
}: {
  user: string;
  password: string;
  host: string;
  port: string;
}): string {
  return `amqp://${user}:${password}@${host}:${port}`;
}

export function parseTime(time: string): TimeAndUnit {
  const match = TOKEN_EXPIRES_IN_REG.exec(time);

  if (!match) {
    throw new Error(`[parseTime] Bad time string: ${time}`);
  }

  const [, valueRaw, unitRaw] = match;
  const value = parseInt(valueRaw, RADIX);
  const unit = unitRaw as DateTimeUnit;

  if (isNaN(value)) {
    throw new Error(`[parseTime] Can't parse value count. Result is NaN.`);
  }

  return { value, unit };
}
