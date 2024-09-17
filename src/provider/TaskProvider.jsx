/* eslint-disable react/prop-types */
import { TaskContext } from "../context/TaskContext";
import { useState } from "react";
export default function TaskProvider({ children }) {
  const defaultTask = {
    id: 1,
    title: "Learn React ",
    description:
      "I want to learn React so well that I can make it do whatever I want.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddEditTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(tasks.map((task) => (task.id === newTask.id ? newTask : task)));
    }
    setShowAddModal(false);
    
    setTaskToUpdate(null);

  }

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function handleFavourite(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isFavorite: !task.isFavorite } : task
      )
    );
  }

  function handleDeleteAllTask() {
    setTasks([]);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        showAddModal,
        taskToUpdate,
        setShowAddModal,
        handleAddEditTask,
        handleEditTask,
        handleDeleteTask,
        handleDeleteAllTask,
        handleFavourite,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
