import { Context } from 'hono'
export const Root = (c: Context) => c.render(
    <h1>Non-Authed Page</h1>,
    {
      title: ''
    }
);