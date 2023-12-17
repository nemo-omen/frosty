import { IStory } from "./IStory";

export interface IRange {
  id: string;
  start: number;
  end: number;
  story: IStory;
}