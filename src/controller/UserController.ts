import { IUser } from "../model/interfaces";
import { UserRepository } from "../repository";
import { UserRequestDTO, UserPersistDTO, UserResponseDTO } from "../common/dtos/UserDTO";
import { Result, ok } from "../common";

export class UserController {
  repository: UserRepository;

  constructor () {
    this.repository = new UserRepository();
  }

  async createUser(userDto: UserRequestDTO): Promise<Result<UserResponseDTO>> {
    const result: Result<UserResponseDTO> = await this.repository.create(userDto);
    return result;
  }

  async getUser(id: string): Promise<Result<UserResponseDTO>> {
    const result: Result<UserResponseDTO> = await this.repository.findById(id);
    return result;
  }
}