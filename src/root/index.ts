import { Context, Hono } from 'hono';
import { Root } from './Root';

const app = new Hono();

app.get('/', (c: Context) => {
  const session = c.get('session');
  const sessionValid = session.sessionValid();
  console.log(sessionValid);
  const sessionUser = session.get('user');
  console.log({ sessionUser });
  if (sessionUser) {
    return c.redirect('/home');
  }
  return Root(c);
});

export default app;