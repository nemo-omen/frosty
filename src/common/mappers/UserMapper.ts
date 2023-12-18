import { PersistedUserDTO } from "../dtos/UserDTO";
import { User } from "../../model";

export class UserMapper {
  public static toPersistedDto(user: User): PersistedUserDTO {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password
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