import express from 'express';
import {
  indexPage,
  messagesPage,
  addMessage,
  addUser,
  getUserById,
} from '../controllers';
import { modifyMessage, performAsyncAction } from '../middleware';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
// indexRouter.post('/messages', addMessage);
indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);
indexRouter.get('/users/:id', getUserById);
indexRouter.post('/users', addUser);

export default indexRouter;
