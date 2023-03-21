import React, { useState } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import TaskList from "./TaskList";
import AddBar from "./AddBar";
import SearchBar from "./SearchBar";
const { v4: uuidv4 } = require("uuid");

const Main = () => {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      text: "Task 1",
      completed: false,
    },
    {
      id: 2,
      text: "Task 2",
      completed: true,
    },
    {
      id: 3,
      text: "Task 3",
      completed: false,
    },
  ]);

  const [needle, setNeedle] = useState("");
  const [newTask, setNewTask] = useState("");

  const addNewTask = (newTask) => {
    setTaskList([
      ...taskList,
      { id: uuidv4(), text: newTask, completed: false },
    ]);
  };

  const handleCheckbox = (id) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTaskList(updatedTaskList);
  };

  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
  };

  return (
    <main className="Main">
      <AddBar
        newTask={newTask}
        setNewTask={setNewTask}
        addNewTask={addNewTask}
      />
      <SearchBar needle={needle} setNeedle={setNeedle} />
      <TaskList
        taskList={taskList.filter((task) =>
          task.text.toLowerCase().includes(needle.toLowerCase())
        )}
        handleCheckbox={handleCheckbox}
        handleDelete={handleDelete}
      />
    </main>
  );
};

export default Main;
