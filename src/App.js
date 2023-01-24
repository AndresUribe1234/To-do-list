import "./App.scss";
import NewToDo from "./components/NewToDo/NewToDo";
import ToDo from "./components/AllToDo/ToDo";

import { useState } from "react";

const currentTodo = [];

function App() {
  return (
    <div className="App">
      <div>To-Do list</div>
      <NewToDo />
      <ToDo />
    </div>
  );
}

export default App;
