import { useState } from "react";

const NewToDoForm = (props) => {
  const [toDo, setToDo] = useState("");

  const toDoValueHandler = (event) => {
    setToDo(event.target.value);
  };

  const addToDo = (event) => {
    event.preventDefault();
    const newToDo = { toDo: toDo, dateUTC: new Date(), id: Math.random() };
    props.onAddToDo(newToDo);
    setToDo("");
    props.onCloseForm();
  };

  return (
    <form onSubmit={addToDo}>
      <input
        value={toDo}
        onChange={toDoValueHandler}
        placeholder="Type new to do"
      ></input>
      <button type="submit">Add</button>
      <button type="button" onClick={props.onCloseForm}>
        Close
      </button>
    </form>
  );
};

export default NewToDoForm;
