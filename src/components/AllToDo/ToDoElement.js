import "./ToDoElement.scss";

function ToDoElement(props) {
  const removeToDoHandler = () => {
    props.onRemove(props.id);
  };

  return (
    <li className="list-element-container">
      <div className="toDo-container">
        <input type={"checkbox"}></input>
        <p>{props.toDo}</p>
        <div onClick={removeToDoHandler}>
          <span className="material-symbols-outlined">delete</span>
        </div>
      </div>
    </li>
  );
}

export default ToDoElement;
