import React from "react";
import Todo from "../todo/Todo";

const TodoList = ({ todos }) => {
  return (
    <ul className="todolist_container">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo}></Todo>
      ))}
    </ul>
  );
};

export default TodoList;
