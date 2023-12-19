import { UserController } from "./controller";
import { Elysia } from "elysia";
import { Result, ok } from "./common/index";
import { UserResponseDTO } from "./common/dtos/UserDTO";

const userController = new UserController();

const app = new Elysia()
  .onError(({ code, error }) => {
    return new Response(error.toString());
  })
  .get("/", async () => {
    const userData = {
      name: "John Doe",
      email: "john@doe.net",
      password: "123456",
    };

    const userResult: Result<UserResponseDTO> = await userController.createUser(userData);

    // TODO: Handle !ok(userResult)
    return userResult;
  });

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

