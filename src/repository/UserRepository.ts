import { IUser } from "../model/interfaces";

class UserRepository {
  public async findUserById(id: string): Promise<IUser> {
    // ...
  }
}