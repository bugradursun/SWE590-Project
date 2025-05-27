const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("todo_db", "todo_user", "todo_pass", {
  host: "35.202.245.57",
  dialect: "postgres",
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Todo = sequelize.define("Todo", {
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = db;
