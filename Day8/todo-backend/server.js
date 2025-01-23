const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

let todos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Learn Node.js", completed: false },
  { id: 3, text: "Build a Todo App", completed: true },
];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = { id: todos.length + 1, text: req.body.text, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find(todo => todo.id == id);
  if (todo) {
    todo.completed = req.body.completed;
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
