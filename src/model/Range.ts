import { IRange, IStory } from "../../types";

export class Range implements IRange {
  private _id: string;
  private _start: number;
  private _end: number;
  private _story: IStory;
  constructor (
    id: string,
    start: number,
    end: number,
    story: IStory
  ) {
    if (id) {
      this._id = id;
    } else {
      this._id = crypto.randomUUID();
    }

    this._start = start;
    this._end = end;
    this._story = story;
  }

  get start(): number {
    return this._start;
  }

  get end(): number {
    return this._end;
  }

  get story(): IStory {
    return this._story;
  }

  get id(): string {
    return this._id;
  }

  set start(start: number) {
    this._start = start;
  }

  set end(end: number) {
    this._end = end;
  }

  set story(story: IStory) {
    this._story = story;
  }

  set id(id: string) {
    this._id = id;
  }
}