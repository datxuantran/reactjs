import React from "react";
import TaskLine from "./TaskLine";

const TaskList = ({ taskList, handleCheckbox, handleDelete }) => {
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

export default TaskList;