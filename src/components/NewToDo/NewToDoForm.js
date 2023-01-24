const NewToDoForm = (props) => {
  return (
    <form>
      <input value="insert new to do"></input>
      <button>Add</button>
      <button onClick={props.onCloseForm}>Close</button>
    </form>
  );
};

export default NewToDoForm;
