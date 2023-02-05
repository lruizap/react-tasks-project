import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { arrayTasks } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskID) {
    setTasks(tasks.filter((task) => task.id !== taskID));
  }

  useEffect(() => {
    setTasks(arrayTasks);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
