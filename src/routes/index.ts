import { Context, Hono } from 'hono';
import { Root } from './Root';

const app = new Hono();

app.get('/', (c: Context) => {
  const session = c.get('session');
  const sessionUser = session.get('user');
  if (sessionUser) {
    return c.redirect('/home');
  }
  return Root(c);
});

export default app;