import { ISourceProvider } from "../../model/interfaces/ISourceProvider";
import { Story } from "../../model";

/**
 * @class RssProvider
 * @implements SourceProvider
 * @description An RSS source provider
 * @param {string} url - The URL of the RSS feed
 * @param {string} name - The name of the RSS feed
 * @returns {RssProvider} An instance of RssProvider
 * @example const rssProvider = new RssProvider('https://www.reddit.com/.rss', 'Reddit');
 * @example rssProvider.fetchLatest().then(stories => console.log(stories));
 */
export class RssProvider implements ISourceProvider {
  url: string;
  name: string;
  providerType: 'RSS';

  /**
   * @property {string} url - The URL of the RSS feed
   * @property {string} name - The name of the RSS feed
   * @property {string} providerType - The type of the provider
   * @example const rssProvider = new RssProvider('https://www.reddit.com/.rss', 'Reddit');
   */
  constructor (url: string, name: string) {
    this.url = url;
    this.name = name;
    this.providerType = 'RSS';
  }

  /**
   * @method fetchLatest
   * @description Fetches the latest stories from the RSS feed
   * @returns {Promise<Story[]>} A promise that resolves to an array of stories
   * @example rssProvider.fetchLatest().then(stories => console.log(stories));
   */
  async fetchLatest(): Promise<Story[]> {
    // TODO: Implement
    return [];
  }
}