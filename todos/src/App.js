import Header from "./Header";
import TaskList from "./TaskList";
import AddBar from "./AddBar";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { useState, useEffect} from "react";
const { v4: uuidv4 } = require("uuid");

function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [newTask, setNewTask] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(taskList));
  }, [taskList])

  const addNewTask = (newTask) => {
    const updatedTaskList = [
      ...taskList,
      { id: uuidv4(), text: newTask, completed: false },
    ];
    setTaskList(updatedTaskList);
    // save updatedTaskList
    localStorage.setItem("todoList", JSON.stringify(updatedTaskList));
  };

  const handleCheckbox = (id) => {
    const updatedTaskList = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTaskList);
  };

  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
  };

  return (
    <div className="App">
      <Header />

      <AddBar
        newTask={newTask}
        setNewTask={setNewTask}
        addNewTask={addNewTask}
      />

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {taskList.length ? (
        <TaskList
          taskList={taskList.filter((task) =>
            task.text.toLowerCase().includes(searchTerm.toLowerCase())
          )}
          handleCheckbox={handleCheckbox}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Your list is empty</p>
      )}

      <Footer />
    </div>
  );
}

export default App;
