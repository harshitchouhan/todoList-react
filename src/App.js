import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import TodoList from "./components/todoList/TodoList";
import ToggleBtn from "./components/toggleBtn/ToggleBtn";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React.js", isCompleted: false },
    { id: 2, task: "Buy Apples", isCompleted: true },
  ]);

  const addTask = (task) => {
    let newTodos = [
      ...todos,
      {
        id: todos.length + 1,
        task,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const toggleIsCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <main id="todolist">
      <h1>
        Todo List
        <span>Today i need To :</span>
      </h1>

      {/* List All the Tasks */}
      {todos.length > 0 ? (
        <TodoList todos={todos} toggleIsCompleted={toggleIsCompleted}></TodoList>
      ) : (
        <p className="emptylist">Your todo list is empty.</p>
      )}

      {/* Move Completed Tasks at the end */}
      {todos.length > 0 && <ToggleBtn />}

      {/* Adding new todo task form */}
      <Form addTask={addTask} />
    </main>
  );
};

export default App;
