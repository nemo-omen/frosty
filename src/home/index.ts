import { Home } from './Home';
import { Context, Hono } from 'hono';
const app = new Hono();

app.get('/', (c: Context) => {
  const session = c.get('session');
  c.set('title', 'Home');
  if (!session) {
    c.redirect('/login');
  }

  const userId = session.get('userId');
  const userEmail = session.get('userEmail');

  return Home(c);
});

export default app;