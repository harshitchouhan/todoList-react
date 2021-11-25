import React from "react";
import "./App.css";
import Form from "./components/form/Form";
import TodoList from "./components/todoList/TodoList";
import ToggleBtn from "./components/toggleBtn/ToggleBtn";

const App = () => {
  let Todos = [
    { id: 1, task: "Learn React.js", isCompleted: false },
    { id: 2, task: "Buy Apples", isCompleted: true },
  ];

  return (
    <main id="todolist">
      <h1>
        Todo List
        <span>Today i need To :</span>
      </h1>

      {/* List All the Tasks */}
      {Todos.length > 0 ? <TodoList todos={Todos}></TodoList> : <p className="emptylist">Your todo list is empty.</p>}

      {/* Move Completed Tasks at the end */}
      <ToggleBtn />

      {/* Adding new todo task form */}
      <Form />
    </main>
  );
};

export default App;
