import { Annotation } from "./Annotation";
import { Source } from "./Source";
import { IUser } from "./interfaces";

export class User implements IUser {
  _id: string;
  _name: string;
  _email: string;
  _password: string;
  _subscriptions: Source[] = [];
  _annotations: Annotation[] = [];

  constructor (
    id: string,
    name: string,
    email: string,
    password: string,
  ) {
    if (id) {
      this._id = id;
    } else {
      this._id = crypto.randomUUID();
    }
    this._name = name;
    this._email = email;
    this._password = password;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get annotations(): Annotation[] {
    return this._annotations;
  }

  get subscriptions(): Source[] {
    return this._subscriptions;
  }

  set annotations(annotations: Annotation[]) {
    this._annotations = annotations;
  }

  set subscriptions(subscriptions: Source[]) {
    this._subscriptions = subscriptions;
  }
}