import { IUser } from "../model/interfaces";
import { IRepository } from "./interfaces/IRepository";
import { Result } from "../common/Result";

export class UserRepository implements IRepository {
  private users: IUser[] = [];

  public async save(user: IUser): Promise<Result<IUser, string | undefined>> {
    this.users.push(user);
    return Result.success(user);
  }

  public async update(user: IUser): Promise<Result<IUser, string | undefined>> {
    const index = this.users.findIndex((u) => u.id === user.id);
    this.users[index] = user;
    return Result.success(user);
  }

  public async delete(id: string): Promise<Result<string, string | undefined>> {
    const index = this.users.findIndex((u) => u.id === id);
    this.users.splice(index, 1);
    return Result.success(id);
  }

  public async find(id: string): Promise<Result<IUser | undefined, string | undefined>> {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      return Result.error("User not found");
    } else {
      return Result.success(user);
    }
  }

  public async findAll(): Promise<Result<IUser[], string | undefined>> {
    return Result.success(this.users);
  }
}