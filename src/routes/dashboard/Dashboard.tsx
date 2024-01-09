import { Context } from 'hono'
import { FC } from 'hono/jsx';
import { MainSidebar } from '../../lib/components/MainSidebar';
export const Dashboard = (c: Context) => {
  return c.render(
    <>
      <MainSidebar />
      <FeedList />
    </>,
    {
      title: 'Dashboard'
    }
  )
};


const FeedList: FC = () => {
  return (
    <main>
      <h2>Feed Items Here</h2>
    </main>
  )
}