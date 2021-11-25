import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import TodoList from "./components/todoList/TodoList";
import DeleteBtn from "./components/deleteBtn/deleteBtn";

const App = () => {
  const updateStorage = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const getFromStorage = () => {
    return JSON.parse(localStorage.getItem("todos"));
  };

  const [todos, setTodos] = useState(getFromStorage() || []);

  const addTask = (task) => {
    let newTodos = [
      ...todos,
      {
        id: Date.now(),
        task,
        isCompleted: false,
      },
    ];

    updateStorage(newTodos);
    setTodos(newTodos);
  };

  const toggleIsCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }

      return todo;
    });

    updateStorage(updatedTodos);
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    updateStorage(updatedTodos);
    setTodos(updatedTodos);
  };

  const removeAllTodo = () => {
    updateStorage([]);
    setTodos([]);
  };

  return (
    <main id="todolist">
      <h1>
        Todo List
        <span>Today i need To :</span>
      </h1>

      {/* List all the todos */}
      {todos.length > 0 ? (
        <TodoList todos={todos} toggleIsCompleted={toggleIsCompleted} removeTodo={removeTodo}></TodoList>
      ) : (
        <p className="emptylist">Your todo list is empty.</p>
      )}

      {/* Delete all todos at once */}
      {todos.length > 0 && <DeleteBtn removeAllTodo={removeAllTodo} />}

      {/* Adding new todo task form */}
      <Form addTask={addTask} />
    </main>
  );
};

export default App;
