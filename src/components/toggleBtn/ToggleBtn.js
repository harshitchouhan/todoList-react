import React from "react";
import "./ToggleBtn.css";

const ToggleBtn = () => {
  return (
    <div className="togglebutton-wrapper togglebutton-checked">
      <label htmlFor="todosort">
        <span className="togglebutton-label">Move done items at the end?</span>
        <span className="tooglebutton-box"></span>
      </label>
      <input id="todosort" type="checkbox" />
    </div>
  );
};

export default ToggleBtn;
