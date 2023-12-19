import { IUser } from "../model/interfaces";
import { User } from "../model";
import type { UserRequestDTO, UserPersistDTO, UserResponseDTO } from "../common/dtos/UserDTO";
import { UserMapper } from "../common/mappers/UserMapper";
import { Result, ok } from "../common";

export class UserRepository {
  users: Set<User> = new Set();

  public async exists(user: UserRequestDTO): Promise<boolean> {
    for (let u of this.users) {
      if (u.email === user.email) {
        return true;
      }
    }
    return false;
  }

  public async create(userDto: UserRequestDTO): Promise<Result<UserResponseDTO>> {
    let result: Result<UserResponseDTO>;
    if (await this.exists(userDto)) {
      return Error("User already exists") as Result<UserResponseDTO>;
    }
    const user = new User(
      userDto.name,
      userDto.email,
      userDto.password
    );
    this.users.add(user);
    return UserMapper.toReturnDto(user) as Result<UserResponseDTO>;
  }

  public async findById(id: string): Promise<Result<UserResponseDTO>> {
    let result: Result<UserResponseDTO> | null = null;
    for (let user of this.users) {
      if (user.id === id) {
        result = UserMapper.toReturnDto(user);
        break;
      }
    }
    if (!result) {
      result = Error("User not found") as Result<UserResponseDTO>;
    }
    return result;
  }

  public async findByEmail(email: string): Promise<Result<UserResponseDTO>> {
    let result: Result<UserResponseDTO> | null = null;
    for (let user of this.users) {
      if (user.email === email) {
        result = UserMapper.toReturnDto(user);
        break;
      }
    }
    if (!result) {
      result = Error("User not found") as Result<UserResponseDTO>;
    }
    return result;
  }

  public async update(userDto: UserResponseDTO): Promise<Result<UserResponseDTO>> {
    let result: Result<UserResponseDTO> | null = null;
    for (let user of this.users) {
      if (user.id === userDto.id) {
        user.name = userDto.name;
        user.email = userDto.email;
        result = UserMapper.toReturnDto(user);
        break;
      }
    }
    if (!result) {
      result = Error("User not found") as Result<UserResponseDTO>;
    }
    return result;
  }
}