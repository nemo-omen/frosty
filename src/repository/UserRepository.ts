import { IUser } from "../model/interfaces";
import { User } from "../model";
import type { NewUserDTO, PersistedUserDTO, ReturnUserDTO } from "../common/dtos/UserDTO";
import { UserMapper } from "../common/mappers/UserMapper";
import { Result, ok } from "../common";

export class UserRepository {
  users: Set<IUser> = new Set();

  public async exists(user: NewUserDTO): Promise<boolean> {
    for (let u of this.users) {
      if (u.email === user.email) {
        return true;
      }
    }
    return false;
  }

  public async create(userDto: NewUserDTO): Promise<Result<ReturnUserDTO>> {
    let result: Result<ReturnUserDTO>;
    if (await this.exists(userDto)) {
      return Error("User already exists") as Result<ReturnUserDTO>;
    }
    const user = new User(
      userDto.name,
      userDto.email,
      userDto.password
    );
    this.users.add(user);
    return UserMapper.toReturnDto(user) as Result<ReturnUserDTO>;
  }
}