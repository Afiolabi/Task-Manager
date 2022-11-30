import express from "express";
import {createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo} from '../controller/todoController';

const router = express.Router()

router.post('/create', createTodo)

router.get('/get-all-todos', getAllTodos)

router.get('/todo/get-todo/:id', getTodoById);


router.delete("todo/delete-todo/:id", deleteTodo);

router.patch('/todo/update-todo/:id',updateTodo)

export default router