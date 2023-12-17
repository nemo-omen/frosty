import { IAnnotation, IRange, IUser, IStory } from "../../types";

export class Annotation implements IAnnotation {
  private _id: string;
  private _user: IUser;
  private _story: IStory;
  private _text: string;
  private _createdAt: Date;
  private _updatedAt: Date | null;
  private _type: string | null = null;
  private _range: IRange | null = null;
  private _content: string | null = null;

  constructor (
    id: string,
    user: IUser,
    story: IStory,
    text: string,
    createdAt: Date = new Date(),
  ) {
    if (id) {
      this._id = id;
    } else {
      this._id = crypto.randomUUID();
    }

    if (createdAt) {
      this._createdAt = createdAt;
    } else {
      this._createdAt = new Date();
    }

    this._updatedAt = new Date();
    this._user = user;
    this._story = story;
    this._text = text;
  }

  set range(range: IRange) {
    this._range = range;
  }

  get range(): IRange | null {
    return this._range;
  }

  set content(content: string) {
    this._content = content;
    this._updatedAt = new Date();
  }

  get content(): string | null {
    return this._content;
  }

  get id(): string {
    return this._id;
  }

  get user(): IUser {
    return this._user;
  }

  get story(): IStory {
    return this._story;
  }

  get text(): string {
    return this._text;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date | null {
    return this._updatedAt;
  }

  get type(): string | null {
    return this._type;
  }

  set type(type: string | null) {
    this._type = type;
  }
}