import { Request, Response } from "express";
import { tasks } from "../db/connect";
import { ObjectId } from "mongodb";

export async function createTask(req: Request, res: Response) {
  const { status, description, dueDate, deleted } = req.body;
  await tasks.insertOne({
    status,
    description,
    dueDate: new Date(dueDate),
    deleted,
  });
  const allTasks = await tasks.find({}).toArray();
  res.json(allTasks);
}

export async function deleteTask(req: Request, res: Response) {
  const { taskId } = req.params;
  await tasks.deleteOne({ _id: taskId });
  const allTasks = await tasks.find({}).toArray();
  res.json(allTasks);
}

export async function getTasks(req: Request, res: Response) {
  const {
    query: { status, deleted },
  } = req;

  const filter: { status?: string; deleted?: boolean } = {};
  if (
    typeof status !== "undefined" &&
    (status === "pending" || status === "done")
  ) {
    filter.status = status;
  }

  if (typeof deleted !== "undefined") {
    filter.deleted = deleted === "true" ? true : false;
  }

  const result = await tasks.find(filter).toArray();
  res.json(result);
}

export async function getTask(req: Request, res: Response) {
  const { taskId } = req.params;
  if (!taskId) return res.status(400).end();
  const task = await tasks.findOne({ _id: new ObjectId(taskId) });
  res.json(task);
}

export async function deleteAllTasks(req: Request, res: Response) {
  await tasks.deleteMany({});
  res.end();
}
