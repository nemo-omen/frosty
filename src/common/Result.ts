/**
 * Result class
 * @param T - Success value type
 * @param E - Error value type
 * @returns Result<T, E>
 * @example const result = Result.success<string, string>('success');
 * @example const result = Result.error<string, string>('error');
 * @example if (result.isSuccess()) { console.log(result.getValue()); }
 * @example if (result.isFailure()) { console.log(result.getError()); }
 * @courtesy https://lab.scub.net/understanding-result-pattern-in-typescript-e82934cea096
 */
class Result<T, E> {
  private _isSuccess: boolean;
  private value?: T;
  private error?: E;

  private constructor (isSuccess: boolean, value?: T, error?: E) {
    this._isSuccess = isSuccess;
    this.value = value;
    this.error = error;
  }

  /**
   * Success
   * @param value 
   * @returns Result<T, undefined>
   */
  static success<T, E>(value: T): Result<T, undefined> {
    return new Result<T, undefined>(true, value);
  }

  /**
   * Error
   * @param error
   * @returns Result<undefined, E>
   */
  static error<T, E>(error: E): Result<undefined, E> {
    return new Result<undefined, E>(false, undefined, error);
  }

  /**
   * isSuccess
   * @returns boolean
   */
  isSuccess(): boolean {
    return this._isSuccess;
  }

  /**
   * isFailure
   * @returns boolean
   */
  isFailure(): boolean {
    return !this._isSuccess;
  }

  /**
   * getValue
   * @returns T | undefined
   */
  getValue(): T | undefined {
    return this.value;
  }

  /**
   * getError
   * @returns E | undefined
   */
  getError(): E | undefined {
    return this.error;
  }
}