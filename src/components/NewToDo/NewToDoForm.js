import { useState } from "react";

const NewToDoForm = (props) => {
  const [toDo, setToDo] = useState("");

  const toDoValueHandler = (event) => {
    setToDo(event.target.value);
  };

  const addToDo = (event) => {
    event.preventDefault();
    const newToDo = { toDo: toDo, dateUTC: new Date() };
    props.onAddToDo(newToDo);

    // // Local time to Copenhagen time
    // const a=new Date() -> saves date UTC
    // console.log(a.toLocaleString("en-US", { timeZone: "Europe/Copenhagen" }));
    // // Return time on utc
    // console.log(a.toISOString("en-US"));
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
