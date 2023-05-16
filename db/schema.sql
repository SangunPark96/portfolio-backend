DROP DATABASE IF EXISTS projects_dev;
CREATE DATABASE projects_dev;

\c projects_dev;

CREATE TABLE projects (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 technology TEXT NOT NULL,
 module INT,
 description TEXT,
 revisit BOOLEAN DEFAULT FALSE
);

CREATE TABLE interests (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    media_type TEXT NOT NULL,
    genre TEXT,
    still_enjoy BOOLEAN DEFAULT TRUE,
    img_link TEXT
);