import { FC } from 'hono/jsx';
import { useRequestContext } from 'hono/jsx-renderer';

export const Header: FC = () => {
  const c = useRequestContext();
  const session = c.get('session');
  if(session) {
    return authedHeader();
  }
  return unAuthedHeader();
}

const authedHeader = () => (
  <header>
    <a href="/" id="main-link">Frosty</a>

    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li>
          <form action="/auth/logout" method="POST">
            <button type="submit" class="button-link">Log Out</button>
          </form>
        </li>
      </ul>
    </nav>
  </header>
)

const unAuthedHeader = () => (
  <header>
    <a href="/" id="main-link">Frosty</a>

    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/auth/login">Login</a></li>
        <li><a href="/auth/signup">Signup</a></li>
      </ul>
    </nav>
  </header>
)