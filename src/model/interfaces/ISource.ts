import { IUser } from "./IUser";
import { ISourceProvider } from "./ISourceProvider";

export interface ISource {
  id: string;
  name: string;
  description: string;
  url: string;
  link: string;
  category: string;
  language: string;
  lastUpdated: Date;
  type: string;
  subscribers: IUser[];
}