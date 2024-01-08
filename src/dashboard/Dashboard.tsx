import { main } from 'bun';
import { Context } from 'hono'
import { FC } from 'hono/jsx';

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
      <nav aria-label="feed-sidebar">

      <ul>
        <li><a href="/home">All Feeds</a></li>
        <li><a href="/home/notes">Notes</a></li>
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