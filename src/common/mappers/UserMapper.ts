import { PersistedUserDTO, ReturnUserDTO } from "../dtos/UserDTO";
import { User } from "../../model";

export class UserMapper {
  public static toPersistDto(user: User): PersistedUserDTO {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password
    };
  }

  public static toReturnDto(user: User): ReturnUserDTO {
    return {
      id: user.id,
      name: user.name,
      email: user.email
    };
  }

  public static toDomainModel(userDto: PersistedUserDTO): User {
    const user = new User(
      userDto.name,
      userDto.email,
      userDto.password,
      userDto.id
    );
    return user;
  }
}