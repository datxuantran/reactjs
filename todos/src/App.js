import Header from "./Header";
import AddBar from "./AddBar";
import SearchBar from "./SearchBar";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";
const { v4: uuidv4 } = require("uuid");

function App() {
  const [listTasks, setListTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "http://localhost:3500/tasks";
  useEffect(() => {
    const fetchTasks = async () => {
      // make sure to catch any errors
      // so errors will not bubble out as return result of the callback function
      // which will effect useEffect()
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Did not receive expected data");
        // console.log(response.json()); //  response.json return a promises
        const listTasks = await response.json();
        // console.log(listTasks);
        setListTasks(listTasks);
        setFetchError(null);
      } catch (e) {
        setFetchError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    // call the fetchTasks
    setTimeout(() => fetchTasks(), 3000);
  }, []);

  const addNewTask = (newTask) => {
    const updatedListTasks = [
      ...listTasks,
      { id: uuidv4(), text: newTask, completed: false },
    ];
    setListTasks(updatedListTasks);
    // save updatedTaskList
    localStorage.setItem("todoList", JSON.stringify(updatedListTasks));
  };

  const handleCheckbox = (id) => {
    const updatedListTasks = listTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setListTasks(updatedListTasks);
  };

  const handleDelete = (id) => {
    const updatedListTasks = listTasks.filter((task) => task.id !== id);
    setListTasks(updatedListTasks);
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

      {isLoading && <p style={{ color: "green" }}>Loading tasks...</p>}
      {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      {!fetchError && !isLoading && (
        <Content
          taskList={listTasks.filter((task) =>
            task.text.toLowerCase().includes(searchTerm.toLowerCase())
          )}
          handleCheckbox={handleCheckbox}
          handleDelete={handleDelete}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
