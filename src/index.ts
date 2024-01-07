import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import { Session, sessionMiddleware, CookieStore } from 'hono-sessions';
import { BunSqliteStore } from 'hono-sessions/bun-sqlite-store';
import home from './home';
import auth from './auth';
import root from './root';
import Database from 'bun:sqlite';
import { jsxRenderer } from 'hono/jsx-renderer';
import { Base } from './common/layout/Base';
import { HtmlEscapedString } from 'hono/utils/html';

const app = new Hono<{ Variables: { session: Session, session_key_rotation: boolean; }; }>(
);

const db = new Database('./frosty.sqlite');
const store = new BunSqliteStore(db);
// const store = new CookieStore();

declare module 'hono' {
  interface ContextRenderer {
    (content: Promise<HtmlEscapedString> | HtmlEscapedString, props: { title: string; }): Response;
  }
}

app.use('/public/*', serveStatic({ root: './' }));
app.use('*', sessionMiddleware({
  store,
  encryptionKey: "some_password_that_is_at_least_thirty_two_characters_long",
  expireAfterSeconds: 300,
  cookieOptions: {
    sameSite: 'Strict',
    path: '/',
    httpOnly: true,
    secure: true,
  },
}));

app.use(
  '*',
  jsxRenderer(
    ({ children, title }) => Base({ children, title }),
    { docType: true }
  ),
);

app.route('/', root);
app.route('/auth', auth);
app.route('/home', home);
export default app;
