export interface ISourceProvider {
  url: string;
  name: string;
  providerType: string;
  fetchLatest(): Promise<any>;
}