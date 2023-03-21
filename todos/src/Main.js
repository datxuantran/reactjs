import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const TaskLine = ({ task, handleCheckbox, handleDelete }) => {
  return (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.completed}
        onClick={() => handleCheckbox(task.id)}
      />
      <label onDoubleClick={() => handleCheckbox(task.id)}>{task.text}</label>
      <FaTrashAlt 
        onClick={() => handleDelete(task.id)}
      />
    </li>
  );
};

const TaskList = () => {
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
    <ul>
      {taskList.map((task) => {
        return <TaskLine 
        task={task} 
        handleCheckbox={handleCheckbox} 
        handleDelete={handleDelete}
        />;
      })}
    </ul>
  );
};

const Main = () => {
  return (
    <main className="Main">
      <TaskList />
    </main>
  );
};

export default Main;
