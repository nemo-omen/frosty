import { ISourceProvider } from "../../types/ISourceProvider";
import { Story } from "../../domain/model";

/**
 * @class ScraperProvider
 * @implements SourceProvider
 * @description A scraper source provider
 * @param {string} url - The URL of the scraper
 * @param {string} name - The name of the scraper
 * @returns {ScraperProvider} An instance of ScraperProvider
 * @example const scraperProvider = new ScraperProvider('https://www.reddit.com/', 'Reddit');
 * @example scraperProvider.fetchLatest().then(stories => console.log(stories));
 */
export class ScraperProvider implements ISourceProvider {
  url: string;
  name: string;
  providerType: 'SCRAPER';

  /**
   * @property {string} url - The URL of the scraper
   * @property {string} name - The name of the scraper
   * @property {string} providerType - The type of the provider
   * @example const scraperProvider = new ScraperProvider('https://www.reddit.com/', 'Reddit');
   */
  constructor (url: string, name: string) {
    this.url = url;
    this.name = name;
    this.providerType = 'SCRAPER';
  }

  /**
   * @method fetchLatest
   * @description Fetches the latest stories from the scraper
   * @returns {Promise<Story[]>} A promise that resolves to an array of stories
   * @example scraperProvider.fetchLatest().then(stories => console.log(stories));
   */
  async fetchLatest(): Promise<Story[]> {
    // TODO: Implement
    return [];
  }
}