import { main } from 'bun';
import { Context } from 'hono'
import { FC } from 'hono/jsx';
import { Icon } from '../common/components/Icon';

export const Dashboard = (c: Context) => {
  return c.render(
    <>
      <FeedSidebar />
      <FeedList />
    </>,
    {
      title: 'Dashboard'
    }
  )
};

const FeedSidebar: FC = () => {
  return(
    <aside class="sidebar" id="sidebar-main">
      <nav aria-label="feed-sidebar" id="#sidebar-nav">
      <ul>
        <li><a href="/dashboard" class="icon-link"><Icon name="list" />All Posts</a></li>
        <li><a href="/dashboard/notes" class="icon-link"><Icon name="inbox" />Unread</a></li>
        <li><a href="/dashboard/collections/reading-list" class="icon-link"><Icon name="stopwatch" />Reading List</a></li>
        <li><a href="/dashboard/collections/saved" class="icon-link"><Icon name="bookmark" />Saved</a></li>
        <li><a href="/dashboard/collections/tagged" class="icon-link"><Icon name="tag" />Tagged</a></li>
        <li><a href="/dashboard/notes" class="icon-link"><Icon name="note" />Notes</a></li>
        <li><a href="/dashboard/new" class="icon-link"><Icon name="add" />Add Feed</a></li>
      </ul>
      </nav>
    </aside>
  )
}

const FeedList: FC = () => {
  return (
    <main>
      <h2>Feed Items Here</h2>
    </main>
  )
}