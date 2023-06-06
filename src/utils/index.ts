export function isObject(value: unknown): value is Record<any, any> {
  return value !== null && typeof value === 'object';
}
export function isFunction(value: unknown): value is (...args: any) => any {
  return typeof value === 'function';
}

export const isString = (value: unknown): value is string => typeof value === 'string';
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';
export const isNumber = (value: unknown): value is number => typeof value === 'number';
export const isUndef = (value: unknown): value is undefined => typeof value === 'undefined';
