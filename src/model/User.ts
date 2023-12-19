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
    name: string,
    email: string,
    password: string,
    id: string | undefined = undefined,
  ) {
    if (id) {
      this._id = id;
    } else {
      this._id = crypto.randomUUID();
    }
    this._name = name;
    this.email = email;
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

  set name(name: string) {
    this._name = name;
  }

  set email(email: string) {
    if (!email.includes("@")) {
      throw new Error("Invalid email");
    }
    if (!email.includes(".")) {
      throw new Error("Invalid email");
    }
    if (email.includes(" ")) {
      throw new Error("Invalid email");
    }
    if (email.includes(",")) {
      throw new Error("Invalid email");
    }
    this._email = email;
  }

  set annotations(annotations: Annotation[]) {
    this._annotations = annotations;
  }

  set subscriptions(subscriptions: Source[]) {
    this._subscriptions = subscriptions;
  }
}