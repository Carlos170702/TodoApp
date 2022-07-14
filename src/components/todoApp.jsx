import { useState } from "react";
import { Todo } from "./Todo";
import './TodoApp.css';


export function TodoApp() {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    const temp = e.target.value;
    setTitle(temp);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //se crea un nuevo arreglo con los datos de el useState de title
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    const temp = [...todos]; //se ase una copia de el arreglo ya existente
    temp.unshift(newTodo); // se le agrega el nuevo dato ingresado a temp aparte de la copia hecha
    setTodos(temp);

    setTitle("");
  }

  function handleUpdate(id, value) {
    const temp = [...todos]; //ase una copia de los datos que existen
    const item = temp.find((item) => item.id === id); // busca en cada dato del objeto que conisida con la condicion puesta
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input className="todoInput" onChange={handleChange} value={title} placeholder={'Dijita la tarea por hacer'}/>
        <input
          type="submit"
          value={"Create Todo"}
          className="buttonCreate btn"
          onClick={handleSubmit}
        />
      </form>
      <div className="todoContainer">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
