import React from "react";
import "./ToggleBtn.css";

const ToggleBtn = () => {
  return (
    <div class="togglebutton-wrapper togglebutton-checked">
      <label for="todosort">
        <span class="togglebutton-label">Move done items at the end?</span>
        <span class="tooglebutton-box"></span>
      </label>
      <input id="todosort" type="checkbox" name="todosort" />
    </div>
  );
};

export default ToggleBtn;
