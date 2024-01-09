import { FC } from "hono/jsx";
import { useRequestContext } from "hono/jsx-renderer";

export const FeedResultList: FC = () => {
  const c = useRequestContext();
  const feed = c.get('feed');
  console.log({feed});
  return (
    <>
      {JSON.stringify(feed)}
    </>
  )
}