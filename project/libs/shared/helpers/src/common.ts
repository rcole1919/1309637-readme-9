import { ClassTransformOptions, plainToInstance } from 'class-transformer';

type PlainObject = Record<string, unknown>;

export function fillDTO<T, V extends PlainObject>(
  DTOClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions,
): T;

export function fillDTO<T, V extends PlainObject[]>(
  DTOClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions,
): T[];

export function fillDTO<T, V extends PlainObject>(
  DTOClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions,
): T | T[] {
  return plainToInstance(DTOClass, plainObject, {
    excludeExtraneousValues: true,
    ...options,
  });
}
