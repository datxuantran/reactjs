import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const TaskLine = ({ task, handleCheckbox, handleDelete }) => {
  return (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.completed}
        onClick={() => handleCheckbox(task.id)}
      />
      <label
        style={task.completed ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheckbox(task.id)}
      >
        {task.text}
      </label>
      <FaTrashAlt onClick={() => handleDelete(task.id)} />
    </li>
  );
};

export default TaskLine;
