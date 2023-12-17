import { IStory } from "./IStory";
import { IUser } from "./IUser";
import { IRange } from "./IRange";

export interface IAnnotation {
  id: string;
  user: IUser;
  story: IStory;
  text: string;
  createdAt: Date;
  updatedAt: Date | null;
  type: string | null;
  range: IRange | null;
  content: string | null;
}