import { t } from 'elysia';
import { Database } from 'bun:sqlite';
import { db } from '../common/infra/db/sqlite';

interface NewUserDTO {
  username: string,
  email: string,
  password?: string;
}

export const SignUpDTO = t.Object({
  username: t.String({ minLength: 4, maxLength: 20 }),
  email: t.String({ format: 'email' }),
  password: t.String({ minLength: 8 })
});

export const SignInDTO = t.Object({
  email: t.String({ format: 'email' }),
  password: t.String({ minLength: 8 })
});

interface UserProps {
  email: string;
  username: string;
  password?: string;
  id?: number;
  db: Database;
}

export class User {
  email: string;
  username: string;
  id?: number;
  subscriptions: any[];
  annotations: any[];
  db: Database;

  constructor (props: UserProps) {
    this.email = props.email;
    this.username = props.username;
    this.subscriptions = [];
    this.annotations = [];
    this.db = db;
  }

  setId(id: number) {
    this.id = id;
  }

  create(userDTO: NewUserDTO) {
    const id = 
    const user = new User(userDTO);
  }
}