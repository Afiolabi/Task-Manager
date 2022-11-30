import { Request, Response } from "express";
import Todo from "../model/todoModel";

/** ========================= CREATE TODO ========================= */

export const createTodo = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.create(req.body);
    if (todo) {
      return res.status(201).json({
        message: "Successfully Created Todo",
        todo,
      });
    }
    return res.status(400).json({
      Error: "Unable to create todo",
    });
  } catch (err) {
    //console.log(err.message)
    return res.status(500).json({
      Error: "Internal Server error occured",
      route: "/todo/create",
    });
  }
};

/** ========================= DISPLAY ALL TODO ========================= */
export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const limit = req.query.limit as number | undefined;
    const todos = await Todo.find({ limit: limit });
    if (todos) {
      return res.status(200).json({
        message: "You have successfully retrieved all todos",
        todos,
      });
    }
    return res.status(400).json({
      Error: "Todos not found",
    });
  } catch (err) {
    return res.status(500).json({
      Error: "Internal Server error occured",
      route: "/todo/get-all-todos",
    });
  }
};
/** ========================= GET TODO BY ID ========================= */
export const getTodoById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findOne({ _id: id });
    if (todo) {
      return res.status(200).json({
        message: `Successfully retrieved user with id ${id}`,
        todo,
      });
    }
    return res.status(400).json({
      Error: "Todos not found",
    });
  } catch (err) {
    return res.status(500).json({
      Error: "Internal Server error occured",
      route: "/todo/get-todo/:id",
    });
  }
};
/** ========================= DELETE TODO BY ID ========================= */
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findOneAndDelete({ _id: id });
    if (todo) {
      return res.status(200).json({
        message: `Todo deleted successfully`,
        todo,
      });
    }
    return res.status(400).json({
      Error: "Todos not found",
    });
  } catch (error) {
    return res.status(500).json({
      Error: "Internal Serve error occoured",
      route: "todo/delete-todo/:id",
    });
  }
};
/** ========================= UPDATE TODO ========================= */
export const updateTodo = async (req:Request, res:Response) => {
  try {
   const id = req.params.id;

    const todo = await Todo.findOneAndUpdate({ _id: id })

    if (todo) {
      res.status(200).json({
        message: `Todo updated successfully`,
        todo
      });
    }

   return res.status(400).json({
     Error: "Unable to update Todo",
   });
  } catch {
    return res.status(500).json({
      Error: "Internal Server error occoured",
      route: "/todo/update-todo/:id",
    });
  }
};
