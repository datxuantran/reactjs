import React from "react";
import TaskList from "./ListTasks";

const Content = ({ taskList, handleCheckbox, handleDelete }) => {
  return (
    <>
      {taskList.length ? (
        <TaskList
          taskList={taskList}
          handleCheckbox={handleCheckbox}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Your list is empty</p>
      )}
    </>
  );
};

export default Content;
