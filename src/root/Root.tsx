import { Context } from 'hono'
import { Base } from '../common/layout/Base'
export const Root = (c: Context) => c.render(
    <h1>Non-Authed Page</h1>,
    {
      title: ''
    }
);