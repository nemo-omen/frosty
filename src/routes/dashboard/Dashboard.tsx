import { Context } from 'hono'
import { FC } from 'hono/jsx';
import { MainSidebar } from '../../lib/components/MainSidebar';
import { useRequestContext } from 'hono/jsx-renderer';
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
  const c: Context = useRequestContext();
  return (
    <main>
      <h2>Feed Items Here</h2>
    </main>
  )
}