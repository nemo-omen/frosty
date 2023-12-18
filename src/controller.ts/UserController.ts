import { IUser } from "../model/interfaces";
import { UserService } from "../service";
import { NewUserDTO, PersistedUserDTO } from "../common/dtos/UserDTO";

export class UserController {
  service: UserService;

  constructor () {
    this.service = new UserService();
  }

  async createUser(userDto: NewUserDTO): Promise<IUser> {
    const user = await this.service.create(userDto);
    return user;
  }
}