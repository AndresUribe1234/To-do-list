import "./App.scss";
import NewToDo from "./components/NewToDo/NewToDo";
import ToDo from "./components/AllToDo/ToDo";

import { useState } from "react";

const toDoLocalStorageJSON = localStorage.getItem("toDos");
const toDoLocalStorage = JSON.parse(toDoLocalStorageJSON);
let currentToDos = [];
if (toDoLocalStorage) currentToDos = [...toDoLocalStorage];

function App() {
  const [toDo, setToDo] = useState(currentToDos);

  const newToDoHandler = (data) => {
    setToDo((prevToDo) => {
      return [data, ...prevToDo];
    });
  };
  localStorage.setItem("toDos", JSON.stringify(toDo));
  console.log(toDo);

  return (
    <div className="App">
      <div>To-Do list</div>
      <NewToDo onAddToDo={newToDoHandler} />
      <ToDo />
    </div>
  );
}

export default App;
