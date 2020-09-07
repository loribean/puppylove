CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    bio TEXT
);

CREATE TABLE IF NOT EXISTS dog (
    id SERIAL PRIMARY KEY,
    name TEXT,
    org_id INTEGER,
    description TEXT,
    img TEXT,
    age TEXT,
    gender TEXT,
    hdb_approved boolean,
    date_posted TIMESTAMP DEFAULT now()
);


CREATE TABLE IF NOT EXISTS org (
	id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);


CREATE TABLE IF NOT EXISTS match (
    id SERIAL PRIMARY KEY,
    dog_id INTEGER,
    follower_user_id INTEGER,
    liked boolean null
);

CREATE TABLE IF NOT EXISTS message (
    id SERIAL PRIMARY KEY,
    sender_id INTEGER,
    recipient_id INTEGER,
    sender_name TEXT,
    recipient_name TEXT,
    content TEXT,
    date_posted TIMESTAMP DEFAULT now()
);