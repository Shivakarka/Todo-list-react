import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const getItems = () => {
  let list = localStorage.getItem("items");
  if (list) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
};

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(getItems);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo, done: false }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    inputElement.current.focus();
    setTodo(editTodo.todo);
    setEditId(id);
  };

  const handleReset = () => {
    setTodos([]);
    localStorage.removeItem("items");
  };

  const handleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);

  const inputElement = useRef();

  return (
    <div className="App">
      <div className="container ">
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
          handleReset={handleReset}
          inputElement={inputElement}
        />

        <TodoList
          todos={todos}
          handleDone={handleDone}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
