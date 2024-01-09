import { FC } from 'hono/jsx';
import { Icon } from './Icon';
import { useRequestContext } from 'hono/jsx-renderer';

export const MainSidebar: FC = () => {
  const c = useRequestContext();
  const { feeds, collections } = c;
  
  return (
    <header class="sidebar" id="sidebar-main">
      <nav aria-label="main" id="#sidebar-nav">
      <a href="/" id="main-link">
        Stringer
        <span>
          <Icon name="bolt" />
        </span>
      </a>

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
    </header>
  )
}