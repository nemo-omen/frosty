import { Dashboard } from './Dashboard';
import { FeedSearch } from './FeedSearch';
import { FeedResult } from './FeedResult';
import { Context, Hono } from 'hono';
import { SQLiteFeedRepository } from '../../repo/feed.repository';
import { db } from '../../lib/infra/sqlite';
import { z } from 'zod';
import { validator } from 'hono/validator';

const app = new Hono();

const searchFormSchema = z.object({
  feedurl: z.string().url()
});

app.get('/', async (c: Context) => {
  const feedRepo = new SQLiteFeedRepository(db);
  const storedFeeds = feedRepo.getFeeds();
  return Dashboard(c);
});

app.get('/new', (c: Context) => {
  return FeedSearch(c);
});

app.post(
  '/new',
  validator('form', (value, c) => {
    const session = c.get('session');
    const result = searchFormSchema.safeParse(value);
    if (!result.success) {
      const issues = result.error.issues;
      const issuePaths = issues.map((issue) => issue.path[0]);
      const issueMessages = issues.map((issue) => issue.message);
      for (let i = 0; i < issuePaths.length; i++) {
        session.flash(`${issuePaths[i]}Error`, issueMessages[i]);
      }
    }
    return result.data;
  }),
  (c: Context) => {
    const data = c.req.valid('form');
    console.log({ data });
    return FeedResult(c);
  }
);

export default app;