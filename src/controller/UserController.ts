import { IUser } from "../model/interfaces";
import { UserRepository } from "../repository";
import { NewUserDTO, PersistedUserDTO, ReturnUserDTO } from "../common/dtos/UserDTO";
import { Result, ok } from "../common";

export class UserController {
  service: UserRepository;

  constructor () {
    this.service = new UserRepository();
  }

  async createUser(userDto: NewUserDTO): Promise<Result<ReturnUserDTO>> {
    const result: Result<ReturnUserDTO> = await this.service.create(userDto);
    return result;
  }
}