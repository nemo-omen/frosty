import { Context } from "elysia";
import { loginView } from './login.view';

export function loginGetController() {
  return loginView();
}

export function loginPostController(context: Context) {
  console.log(context);
}