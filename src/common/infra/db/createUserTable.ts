import { db } from "./sqlite";

const createUserTableQuery = `CREATE TABLE
    IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        email TEXT,
        password TEXT
    )`;

export function createUserTable() {
  const query = db.query(createUserTableQuery);
  query.run();
  query.finalize();
}