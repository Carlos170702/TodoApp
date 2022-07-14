import { useState } from "react";

export function Todo({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState();

  //se muestra este componente cuando es true la variable isEdit
  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    //funcion dentro de el componente FormEdit en el form
    function handleSubmit(e) {
      e.preventDefault();
    }

    //funcion dentro de el componente FormEdit en el input
    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdateTodo() {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdateTodo}>
          Update
        </button>
      </form>
    );
  }

  //se mujestra este componente cuando es false en la variable isEdit
  function TodoElement() {
    return (
      <div className="todoInfo">
        <div className="info">{item.title}</div>
        <button className="btn btnUpdate"  onClick={() => setIsEdit(true)}>edit</button>
        <button className="btn btnDelete" onClick={(e) => onDelete(item.id)}>Delete</button>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
