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
    stravaid INT NOT NULL,
    refreshtoken VARCHAR NOT NULL
  )
`;

export const insertUsers = `
  INSERT INTO users (stravaid, refreshtoken)
  VALUES (123456, 'refreshtokenInput'),
          (9567865, 'resfreshTOKENInput')
`;

export const dropUsersTable = 'DROP TABLE users';
