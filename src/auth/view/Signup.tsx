import { Context } from "hono";

export const Signup = (c: Context) => c.render(
  <div class="auth-form">
    <h2>Sign Up</h2>
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
    </form>
  </div>,
    {
      title: 'Sign Up'
    }
)