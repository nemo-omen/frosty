import { IUser } from "../model/interfaces";
import { User } from "../model";
import { NewUserDTO, PersistedUserDTO } from "../common/dtos/UserDTO";


export class UserService {
  users: Set<IUser> = new Set();

  public async create(userDto: NewUserDTO): Promise<IUser> {
    const user = new User(userDto.name, userDto.email, userDto.password);
    this.users.add(user);
    return user;
  }
}