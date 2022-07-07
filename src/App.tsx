import { useState } from "react";
import "./App.css";
import AddTaskButton from "./components/AddTask";
import TaskList from "./components/TaskList";

const tasks = [
  { id: "a", status: "done", description: "a" },
  { id: "b", status: "pending", description: "b" },
  { id: "c", status: "pending", description: "c" },
  { id: "d", status: "done", description: "c" },
  { id: "e", status: "pending", description: "c" },
  { id: "f", status: "pending", description: "c" },
];

type TaskProperty = {
  id: string;
  status: "done" | "pending";
  description: string;
};
interface Tasks {
  [key: string]: TaskProperty;
}

const _tasks: Tasks = tasks.reduce((acc, currentTask) => {
  const id = currentTask.id;
  return {
    ...acc,
    [id]: {
      id,
      status: currentTask.status,
      description: currentTask.description,
    },
  };
}, {});

function App() {
  const [tasks, setTasks] = useState(_tasks);
  function handleAddTask() {
    const newId = (Math.random() * 10000).toString();
    const task: TaskProperty = {
      id: newId,
      status: "pending",
      description: "new task",
    };
    setTasks({ ...tasks, [newId]: task });
  }
  return (
    <div className="App">
      <TaskList tasks={tasks} />
      <AddTaskButton onAddTask={handleAddTask} />
    </div>
  );
}

export default App;
