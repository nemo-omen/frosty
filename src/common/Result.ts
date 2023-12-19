export type Result<T> = T | Error;

export function ok<T>(result: Result<T>): result is T {
  return !(result instanceof Error);
}