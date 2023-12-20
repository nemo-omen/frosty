import { UserPersistDTO, UserResponseDTO } from "../dtos/UserDTO";
import { User } from "../../model";
import { Email } from "../values";

export class UserMapper {
  public static toPersistDto(user: User): UserPersistDTO {
    return {
      id: user.id,
      name: user.name,
      email: user.email.props.value,
      password: user.password
    };
  }

  public static toReturnDto(user: User): UserResponseDTO {
    return {
      id: user.id,
      name: user.name,
      email: user.email.props.value
    };
  }

  public static toDomainModel(userDto: UserPersistDTO): User {
    const user = new User(
      userDto.name,
      userDto.email,
      userDto.password,
      userDto.id
    );
    return user;
  }
}