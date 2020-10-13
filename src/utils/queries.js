export const createMessageTable = `
DROP TABLE IF EXISTS messages;
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  message VARCHAR NOT NULL
  )
  `;

export const insertMessages = `
INSERT INTO messages(name, message)
VALUES ('chidimo', 'first message'),
      ('orji', 'second message')
`;

export const dropMessagesTable = 'DROP TABLE messages';

export const createUserTable = `
  DROP TABLE IF EXISTS users;
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    stravaid VARCHAR DEFAULT '',
    refreshtoken VARCHAR NOT NULL
  )
`;

export const insertUsers = `
  INSERT INTO users (stravaid, refreshtoken)
  VALUES ('stravaidTestInput', 'refreshtokenInput'),
          ('secondstravaid', 'resfreshTOKENInput')
`;

export const dropUsersTable = 'DROP TABLE users';
