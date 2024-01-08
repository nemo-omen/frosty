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
      title: 'Home'
    }
  )
};

const FeedSidebar: FC = () => {
  return(
    <aside class="sidebar" id="sidebar-main">
      <nav aria-label="feed-sidebar" id="#sidebar-nav">
      <ul>
        <li>
          <a href="/home" class="icon-link"><Icon name="list" />All Posts</a>
        </li>
        <li><a href="/home/notes" class="icon-link"><Icon name="inbox" />Unread</a></li>
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