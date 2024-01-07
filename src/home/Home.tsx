import { Context } from 'hono'

export const Home = (c: Context) => {
  return c.render(
      <h1>Authed Page</h1>,
      {
        title: 'Home'
      }
  )
};