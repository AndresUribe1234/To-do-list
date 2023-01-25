import ToDoElement from "./ToDoElement";

import "./ToDoElement.scss";

const ToDo = function (props) {
  const removeToDoHandler = (toDoToRemove) => {
    props.onRemove(toDoToRemove);
  };

  return (
    <div>
      <ul className="example">
        <h2>To Do List</h2>
        {props.listOfToDo.map((ele) => (
          <ToDoElement
            toDo={ele.toDo}
            key={Math.random()}
            id={ele.id}
            onRemove={removeToDoHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
