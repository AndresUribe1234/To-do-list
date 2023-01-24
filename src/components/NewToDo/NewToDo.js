import NewToDoForm from "./NewToDoForm";

import { useState } from "react";

const NewToDo = () => {
  const [formToDo, setFormToDo] = useState(false);

  const addFormStateHandler = (event) => {
    setFormToDo(true);
  };

  const stopFormStateHandler = (event) => {
    setFormToDo(false);
  };

  return (
    <div>
      {formToDo === false && (
        <button
          onClick={addFormStateHandler}
          onCloseForm={stopFormStateHandler}
        >
          Add New To-Do
        </button>
      )}
      {formToDo === true && <NewToDoForm />}
    </div>
  );
};

export default NewToDo;
