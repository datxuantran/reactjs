import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const SearchBar = ({ needle, setNeedle }) => {
  return (
    <form className="SearchBar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={needle}
        onChange={(e) => setNeedle(e.target.value)}
      />
      <input type="submit" hidden />
    </form>
  );
};

const TaskLine = ({ task, handleCheckbox, handleDelete }) => {
  return (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleCheckbox(task.id)}
      />
      <label onDoubleClick={() => handleCheckbox(task.id)}>{task.text}</label>
      <FaTrashAlt onClick={() => handleDelete(task.id)} />
    </li>
  );
};

const TaskList = ({ taskList, setTaskList }) => {
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
        return (
          <TaskLine
            task={task}
            handleCheckbox={handleCheckbox}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};

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

  return (
    <main className="Main">
      <SearchBar needle={needle} setNeedle={setNeedle} />
      <TaskList
        taskList={taskList.filter((task) =>
          task.text.toLowerCase().includes(needle.toLowerCase() )
        )}
        setTaskList={setTaskList}
      />
    </main>
  );
};

export default Main;
