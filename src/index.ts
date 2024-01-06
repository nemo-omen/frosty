import { Elysia } from "elysia";
import { homeController } from "./home/home.controller";
import { loginGetController, loginPostController } from "./auth/login.controller";
import { loginView } from "./auth/login.view";
import { html } from '@elysiajs/html';
import { staticPlugin } from '@elysiajs/static';
import { createUserTable } from "./common/infra/db/createUserTable";

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get("/", homeController())
  .get("/login", () => loginGetController())
  .post("/login", (context) => loginPostController(context))
  .listen(3000);

createUserTable();

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);