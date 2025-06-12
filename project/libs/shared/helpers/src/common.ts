import { ClassTransformOptions, plainToInstance } from 'class-transformer';

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