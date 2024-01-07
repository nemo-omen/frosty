import { Context } from "hono";
import { Base } from "../../common/layout/Base";

export const Signup = (c: Context) => c.render(
    <form action="/auth/signup" method="POST">
      <fieldset>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
      </fieldset>
      <fieldset>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </fieldset>
      <fieldset>
        <label for="confirm">Confirm Password</label>
        <input type="password" name="confirm" id="confirm" />
      </fieldset>
      <button type="submit">Sign Up</button>
    </form>,
    {
      title: 'Sign Up'
    }
)