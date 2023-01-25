import { useState } from "react";
import "./NewToDoForm.scss";

const NewToDoForm = (props) => {
  const [toDo, setToDo] = useState("");
  const [valid, setValid] = useState(true);
  const [placeholderValue, serPlaceholderValue] = useState("Type new to do");

  const toDoValueHandler = (event) => {
    setToDo(event.target.value);
    if (event.target.value.trim().length !== 0) {
      setValid(true);
      return;
    }
  };

  const addToDo = (event) => {
    event.preventDefault();
    if (toDo.trim().length === 0) {
      serPlaceholderValue("You must enter some text");
      setValid(false);
      return;
    }
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
        placeholder={placeholderValue}
        className={!valid ? `invalid` : ``}
      ></input>
      <div>
        <button type="submit">Add</button>
        <button type="button" onClick={props.onCloseForm}>
          Close
        </button>
      </div>
    </form>
  );
};

export default NewToDoForm;
