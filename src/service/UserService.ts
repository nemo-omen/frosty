import { IUser } from "../model/interfaces";

export class UserService {
  public async create(user: IUser): Promise<IUser> {
    return user;
  }
}