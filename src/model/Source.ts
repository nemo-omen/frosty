import { RssProvider, ScraperProvider } from "../service";
import { ISource, ISourceProvider, IUser } from "../../types";


export class Source implements ISource {
  private _id: string;
  private _name: string;
  private _description: string;
  private _url: string;
  private _link: string;
  private _category: string;
  private _language: string;
  private _lastUpdated: Date;
  private _type: string;
  private _subscribers: IUser[] = [];
  private _provider: ISourceProvider | null = null;

  constructor (
    id: string,
    name: string,
    description: string,
    url: string,
    link: string,
    category: string,
    language: string,
    type: string,
    lastUpdated: Date = new Date(),
  ) {
    if (id) {
      this._id = id;
    } else {
      this._id = crypto.randomUUID();
    }
    this._name = name;
    this._description = description;
    this._url = url;
    this._link = link;
    this._category = category;
    this._language = language;
    this._lastUpdated = lastUpdated;
    this._type = type;
    this.initProvider();
    this.initSubscribers();
  }

  async initSubscribers() {
    // TODO: Implement
    this._subscribers = [];
  }

  initProvider() {
    if (this._type === 'SCRAPER') {
      this._provider = new ScraperProvider(this._url, this._name);
    } else if (this._type === 'RSS') {
      this._provider = new RssProvider(this._url, this._name);
    }
  }

  /**
   * Fetches the latest stories from the source
   * @returns {Promise<Story[]>}
   * @memberof Source
   */
  async fetchLatest() {
    return await this._provider!.fetchLatest();
  }

  get id(): string {
    return this.id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get url(): string {
    return this._url;
  }

  get link(): string {
    return this._link;
  }

  get category(): string {
    return this._category;
  }

  get language(): string {
    return this._language;
  }

  get lastUpdated(): Date {
    return this._lastUpdated;
  }

  get type(): string {
    return this._type;
  }

  get subscribers(): IUser[] {
    return this._subscribers;
  }

  get provider(): ISourceProvider | null {
    return this._provider;
  }
}