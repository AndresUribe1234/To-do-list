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

  const removeToDoHandler = (toDoToRemove) => {
    setToDo((prevToDo) => {
      const indexToRemove = prevToDo
        .map((ele) => ele.id)
        .findIndex((ele) => ele === toDoToRemove);
      prevToDo.splice(indexToRemove, 1);
      return [...prevToDo];
    });
  };

  localStorage.setItem("toDos", JSON.stringify(toDo));

  return (
    <div className="App">
      <NewToDo onAddToDo={newToDoHandler} />
      <ToDo listOfToDo={toDo} onRemove={removeToDoHandler} />
    </div>
  );
}

export default App;
