import React, { useState } from "react";
import "./Form.css";

const Form = ({ addTask }) => {
  const [task, setTask] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!task) {
      alert("Enter a valid task");
      return;
    }

    addTask(task);
    setTask('')
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="newitem">Add to the todo list</label>
      <input type="text" name="newitem" id="newitem" value={task} onChange={(e) => setTask(e.target.value)} />
      <button type="submit" disabled={!task}>
        Add item
      </button>
    </form>
  );
};

export default Form;
