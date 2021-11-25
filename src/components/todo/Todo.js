import React from "react";
import "./Todo.css";

const Todo = ({ id, task, isCompleted }) => {
  return (
    <li>
      <span className="label">{task}</span>
      <div className="actions">
        <button className="btn-picto" type="button">
          <i aria-hidden="true" className="material-icons">
            {isCompleted ? "check_box" : "check_box_outline_blank"}
          </i>
        </button>
        <button className="btn-picto" type="button" aria-label="Delete" title="Delete">
          <i aria-hidden="true" className="material-icons">
            delete
          </i>
        </button>
      </div>
    </li>
  );
};

export default Todo;