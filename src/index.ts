import { UserController } from "./controller.ts";
import { Elysia } from "elysia";

const app = new Elysia();

const userController = new UserController();

const home = app.get("/", async () => {
  const userData = {
    name: "John Doe",
    email: "john@doe.net",
    password: "123456",
  };
  const user = await userController.createUser(userData);
  console.log(user);
  return "Hello, world!";
});

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

