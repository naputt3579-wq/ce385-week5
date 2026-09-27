import express from "express";
import { TODOS } from "../data.mjs";
import { validateTodo } from "../middleware/validateTodo.mjs";

const todoRouter = express.Router();

todoRouter.get("/", (req, res) => {
  res.json(TODOS);
});
todoRouter.get("/:id", (req, res) => {
  const todo = TODOS.find((item) => item.id === req.params.id);

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found"
    });
  }

  res.json(todo);
});

todoRouter.post("/", validateTodo, (req, res) => {
  TODOS.push(req.body);

  res.status(201).json({
    message: "เพิ่ม Todo สำเร็จ",
    data: req.body
  });
});

export default todoRouter;