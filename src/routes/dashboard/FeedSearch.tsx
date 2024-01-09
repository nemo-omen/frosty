import { Context } from 'hono'
import { FC } from 'hono/jsx';
import { MainSidebar } from '../../lib/components/MainSidebar';
export const FeedSearch = (c: Context) => {
  return c.render(
    <>
      <MainSidebar />
      <main>
        <form action="/dashboard/new" method="POST" class="constrained-form">
          <fieldset>
            <label for="feedurl">Feed URL</label>
            <input type="url" name="feedurl" id="feedurl" />
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