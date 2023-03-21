import React from "react";
import { FaPlus } from "react-icons/fa";

const AddBar = ({ newTask, setNewTask, addNewTask }) => {
  return (
    <form
      className="AddBar"
      onSubmit={(e) => {
        e.preventDefault();
        addNewTask(newTask);
      }}
    >
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add Task"
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddBar;
