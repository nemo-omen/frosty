import { ISource } from "./ISource";

export interface IStory {
  id: string;
  title: string;
  summary: string;
  url: string;
  publishedAt: Date;
  source: ISource;
}