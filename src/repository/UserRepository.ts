import { IUser } from "../model/interfaces";
import { User } from "../model";
import { NewUserDTO, PersistedUserDTO, ReturnUserDTO } from "../common/dtos/UserDTO";
import { UserMapper } from "../common/mappers/UserMapper";


export class UserRepository {
  users: Set<IUser> = new Set();

  public async create(userDto: NewUserDTO): Promise<ReturnUserDTO> {
    const user = new User(userDto.name, userDto.email, userDto.password);
    this.users.add(user);
    const persisted = UserMapper.toReturnDto(user);
    return persisted;
  }
}