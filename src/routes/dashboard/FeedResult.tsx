import { Context } from 'hono'
import { FC } from 'hono/jsx';
import { MainSidebar } from '../../lib/components/MainSidebar';
export const FeedResult = (c: Context) => {
  return c.render(
    <>
      <MainSidebar />
      <main>
        <form action="/dashboard/new" method="POST" class="constrained-form">
          <fieldset>
            <label for="feed-url">Feed URL</label>
            <input type="url" name="feed-url" id="feed-url" />
          </fieldset>
          <button type="submit">Search</button>
        </form>
      </main>
    </>,
    {
      title: 'Add Feed'
    }
  )
};