import React from "react";
import "./deleteBtn.css";

const DeleteBtn = ({ removeAllTodo }) => {
  return (
    <div className="deleteBtn-wrapper">
      <label title="Delete All Todos">
        <span className="deleteBtn-label" onClick={removeAllTodo}>
          Delete All Todos?
        </span>
      </label>
      <button className="btn-picto" type="button" aria-label="Delete" title="Delete All Todos" onClick={removeAllTodo}>
        <i aria-hidden="true" className="material-icons">
          delete
        </i>
      </button>
    </div>
  );
};

export default DeleteBtn;
