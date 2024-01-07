import Database from 'bun:sqlite';
import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import { csrf } from 'hono/csrf';
import { jsxRenderer } from 'hono/jsx-renderer';
import { logger } from 'hono/logger';
import { secureHeaders } from 'hono/secure-headers';
import { HtmlEscapedString } from 'hono/utils/html';
import { Session, sessionMiddleware, CookieStore } from 'hono-sessions';
import { BunSqliteStore } from 'hono-sessions/bun-sqlite-store';
import home from './home';
import auth from './auth';
import root from './root';
import { Base } from './common/layout/Base';

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

app.use('*', logger());
app.use('/public/*', serveStatic({ root: './' }));
// app.use('*', secureHeaders());
app.use('*', csrf({ origin: 'http://localhost:3000' }));
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
