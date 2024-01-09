CREATE TABLE IF NOT EXISTS "schema_migrations" (version varchar(128) primary key);
CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT,
        password TEXT
    );
CREATE TABLE sessions (id TEXT PRIMARY KEY, data TEXT);
CREATE TABLE feeds (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title VARCHAR(255),
        description TEXT,
        feedUrl VARCHAR(255),
        link VARCHAR(255)
    );
CREATE TABLE items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    feedId INTEGER NOT NULL,
    title VARCHAR(255),
    description TEXT,
    link VARCHAR(255),
    pubDate DATETIME,
    content TEXT,

    FOREIGN KEY (feedId)
        REFERENCES feeds(id)
        ON DELETE CASCADE
);
-- Dbmate schema migrations
INSERT INTO "schema_migrations" (version) VALUES
  ('20240106141030'),
  ('20240109033646'),
  ('20240109034240');
