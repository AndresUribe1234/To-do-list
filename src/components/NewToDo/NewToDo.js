import NewToDoForm from "./NewToDoForm";

import { useState } from "react";

const NewToDo = (props) => {
  const [formToDo, setFormToDo] = useState(false);

  const addFormStateHandler = (event) => {
    setFormToDo(true);
  };

  const stopFormStateHandler = (event) => {
    setFormToDo(false);
  };

  const addToDoHandler = (newToDo) => {
    props.onAddToDo(newToDo);
  };

  return (
    <div>
      {formToDo === false && (
        <button onClick={addFormStateHandler}>Add New To-Do</button>
      )}
      {formToDo === true && (
        <NewToDoForm
          onCloseForm={stopFormStateHandler}
          onAddToDo={addToDoHandler}
        />
      )}
    </div>
  );
};

export default NewToDo;
