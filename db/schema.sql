DROP DATABASE IF EXISTS portfolio_dev;
CREATE DATABASE portfolio_dev;

\c portfolio_dev;

CREATE TABLE projects (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 technology TEXT NOT NULL,
 module INT,
 description TEXT,
 revisit BOOLEAN DEFAULT FALSE,
 repo_link TEXT NOT NULL
);

CREATE TABLE interests (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    media_type TEXT NOT NULL,
    genre TEXT,
    still_enjoy BOOLEAN DEFAULT TRUE,
    img_link TEXT,
    summary TEXT
);