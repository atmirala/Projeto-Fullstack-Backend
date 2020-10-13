# Projeto-Fullstack-Backend

CREATE TABLE fullstack_user(
id VARCHAR(255) PRIMARY KEY NOT NULL,
name VARCHAR(255),
email VARCHAR(255) UNIQUE NOT NULL,
nickname VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);

CREATE TABLE fullstack_genre(
genre_id VARCHAR(255) PRIMARY KEY NOT NULL,
name_genre VARCHAR(255)
);

CREATE TABLE fullstack_music(
id VARCHAR(255) PRIMARY KEY NOT NULL,
title VARCHAR(255),
author VARCHAR(255),
date DATE,
file VARCHAR(255) UNIQUE NOT NULL,
genre VARCHAR(255),
FOREIGN KEY (genre) REFERENCES fullstack_genre (genre_id),
album VARCHAR(255)
);