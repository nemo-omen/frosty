interface ItemProps {
  title?: string;
  link?: string;
  pubDate?: string;
  content?: string;
}

export class FeedItem {
  title?: string;
  link?: string;
  pubDate?: string;
  content?: string;

  constructor (props: ItemProps) {
    this.title = props.title;
    this.link = props.link;
    this.pubDate = props.pubDate;
    this.content = props.content;

  }
}