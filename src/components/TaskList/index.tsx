import React, { useState, ChangeEvent, useEffect } from "react";
import TaskRow from "../TaskRow";

type TaskProperty = {
  id: string;
  status: string;
  description: string;
};
interface Tasks {
  [key: string]: TaskProperty;
}

type Props = {
  tasks: Tasks;
};

function TaskList(props: Props) {
  console.log("task list", props.tasks);
  const [taskList, setTaskList] = useState(props.tasks);

  useEffect(() => {
    setTaskList(props.tasks);
  }, [props.tasks]);

  function handleTaskUpdate(taskId: string) {
    console.log(taskId);
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newStatus = e.target.checked ? "done" : "pending";
    const key = e.target.id;
    const updatedTasks: Tasks = { ...taskList };
    const taskToUpdate = updatedTasks[key];
    taskToUpdate.status = newStatus;
    updatedTasks[key] = taskToUpdate;
    setTaskList({ ...updatedTasks });
  }

  function handleTaskDescriptionChange(e: ChangeEvent<HTMLInputElement>) {
    const updatedTasks: Tasks = { ...taskList };
    const key = e.target.id;
    const taskToUpdate = updatedTasks[key];
    taskToUpdate.description = e.target.value;
    updatedTasks[key] = taskToUpdate;
    setTaskList({ ...updatedTasks });
  }

  return (
    <div>
      {Object.values(taskList).map((task) => {
        return (
          <TaskRow
            task={task}
            onCheckboxChange={handleChange}
            onTaskDescriptionChange={handleTaskDescriptionChange}
            onTaskUpdate={handleTaskUpdate}
            key={task.id}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
