import { FeedItem } from "./FeedItem";

interface FeedProps {
  feedUrl?: string;
  title?: string;
  description?: string;
  link?: string;
  items?: FeedItem[];
}

export class Feed {
  feedUrl?: string;
  title?: string;
  description?: string;
  link?: string;
  items?: FeedItem[];

  constructor (props: FeedProps) {
    this.feedUrl = props.feedUrl;
    this.title = props.title;
    this.description = props.description;
    this.link = props.link;
    this.items = props.items || [];
  }

  addItem(item: FeedItem) {
    if (this.items === null || this.items === undefined) {
      this.items = [];
    }
    this.items.push(item);
    this.sortItemsByDate();
  }

  sortItemsByDate() {
    this.items?.sort((a, b) => (new Date(b.pubDate).valueOf()) - (new Date(a.pubDate).valueOf()));
  }
}