import express from "express";

import {
  createTask,
  deleteAllTasks,
  deleteTask,
  getTask,
  getTasks,
} from "../controllers/task";

const taskRouter = express.Router();

taskRouter.post("/", createTask);

taskRouter.delete("/", deleteAllTasks);
taskRouter.delete("/:taskId", deleteTask);

taskRouter.get("/", getTasks);
taskRouter.get("/:taskId", getTask);

export default taskRouter;
