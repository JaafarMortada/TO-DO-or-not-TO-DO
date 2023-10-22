import express from 'express';
import { addTodo } from '../controllers/todo.controller';
import authMiddleware from '../middlewares/auth.middleware';

export default (router: express.Router) => {
  router.post('/todo/add-todo', authMiddleware, addTodo);
};
