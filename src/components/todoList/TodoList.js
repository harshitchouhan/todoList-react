import React from "react";
import Todo from "../todo/Todo";

const TodoList = ({ todos, toggleIsCompleted, removeTodo }) => {
  return (
    <ul className="todolist_container">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} toggleIsCompleted={toggleIsCompleted} removeTodo={removeTodo}></Todo>
      ))}
    </ul>
  );
};

export default TodoList;
