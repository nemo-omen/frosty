import {
  Result
} from "../../common/Result";
export interface IRepository {
  save(value: any): Result<any, string | undefined> | Promise<Result<any, string | undefined>>;
  update(value: any): Result<any, string | undefined> | Promise<Result<any, string | undefined>>;
  delete(value: any): Result<any, string | undefined> | Promise<Result<any, string | undefined>>;
  find(value: any): Result<any, string | undefined> | Promise<Result<any, string | undefined>>;
  findAll(value: any): Result<any[] | undefined, string | undefined> | Promise<Result<any[] | undefined, string | undefined>>;
}