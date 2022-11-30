"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTodos = exports.createTodo = void 0;
const todoModel_1 = __importDefault(require("../model/todoModel"));
/** ========================= CREATE TODO ========================= */
const createTodo = async (req, res) => {
    try {
        const todo = await todoModel_1.default.create(req.body);
        return res.status(201).json({
            message: "Successfully Created Todo",
            todo
        });
    }
    catch (err) {
        //console.log(err.message)
        return res.status(500).json({
            Error: "Internal Server error occured",
            route: "/todo/create"
        });
    }
};
exports.createTodo = createTodo;
/** ========================= DISPLAY ALL TODO ========================= */
const getAllTodos = async (req, res) => {
    try {
        const todos = await todoModel_1.default.find({});
        res.status(200).json({
            message: "You have successfully retrieved all todos",
            todos
        });
    }
    catch (err) {
        return res.status(500).json({
            Error: "Internal Server error occured",
            route: "/todo/get-all-todos"
        });
    }
};
exports.getAllTodos = getAllTodos;
