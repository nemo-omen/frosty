import { ISource, IStory } from "../../types";

export class Story implements IStory {
  private _id: string;
  private _title: string;
  private _summary: string;
  private _url: string;
  private _publishedAt: Date;
  private _source: ISource;
  constructor (
    id: string,
    title: string,
    summary: string,
    url: string,
    publishedAt: Date,
    source: ISource
  ) {
    if (id) {
      this._id = id;
    } else {
      this._id = crypto.randomUUID();
    }

    this._title = title;
    this._summary = summary;
    this._url = url;
    this._publishedAt = publishedAt;
    this._source = source;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get summary(): string {
    return this._summary;
  }

  get url(): string {
    return this._url;
  }

  get publishedAt(): Date {
    return this._publishedAt;
  }

  get source(): ISource {
    return this._source;
  }
}