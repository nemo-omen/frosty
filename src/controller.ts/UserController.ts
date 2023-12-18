import { IUser } from "../model/interfaces";
import { UserService } from "../service";


class UserController {
  service: UserService;

  constructor () {
    this.service = new UserService();
  }
}