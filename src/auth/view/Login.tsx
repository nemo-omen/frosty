import { Context } from 'hono';
import { Base } from '../../common/layout/Base';

export const Login = (c: Context) => c.render(
    <form action="/auth/login" method="POST">
      <fieldset>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
      </fieldset>
      <fieldset>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </fieldset>
      <button type="submit">Login</button>
    </form>,
    {
      title: 'Login'
    }
)