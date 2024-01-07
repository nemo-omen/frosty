CREATE TABLE IF NOT EXISTS "schema_migrations" (version varchar(128) primary key);
CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT,
        password TEXT
    );
-- Dbmate schema migrations
INSERT INTO "schema_migrations" (version) VALUES
  ('20240106141030');
