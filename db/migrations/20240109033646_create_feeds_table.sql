-- migrate:up
CREATE TABLE
    IF NOT EXISTS feeds (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title VARCHAR(255),
        description TEXT,
        feedUrl VARCHAR(255),
        link VARCHAR(255)
    );
-- migrate:down
DROP TABLE IF EXISTS feeds;