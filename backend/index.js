const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

db.sequelize.sync().then(() => {
  console.log("DB is synced");
});

app.get("/todos", async (req, res) => {
  const todos = await db.Todo.findAll();
  if (!todos) {
    res.status(400).send({ error: "todos dont exist" });
  }
  res.json(todos);
});

// add a new todo
app.post("/todos", async (req, res) => {
  const todo = await db.Todo.create({ task: req.body.task });
  res.status(201).json(todo);
});

// toggle completion
app.put("/todos/:id", async (req, res) => {
  const todo = await db.Todo.findByPk(req.params.id);
  if (!todo) return res.status(404).send();
  todo.completed = !todo.completed;
  await todo.save();
  res.json(todo);
});

// delete todo
app.delete("/todos/:id", async (req, res) => {
  await db.Todo.destroy({ where: { id: req.params.id } });
  res.status(204).send();
});

app.get("/", (req, res) => {
  res.send(`Todo App Backend is running`);
});

app.listen(PORT, () => {
  console.log(`Backend is running at localhost PORT ${PORT}`);
});
