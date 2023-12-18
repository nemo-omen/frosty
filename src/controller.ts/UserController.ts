import { IUser } from "../model/interfaces";
import { UserRepository } from "../repository";
import { NewUserDTO, PersistedUserDTO, ReturnUserDTO } from "../common/dtos/UserDTO";

export class UserController {
  service: UserRepository;

  constructor () {
    this.service = new UserRepository();
  }

  async createUser(userDto: NewUserDTO): Promise<ReturnUserDTO> {
    const user = await this.service.create(userDto);
    return user;
  }
}