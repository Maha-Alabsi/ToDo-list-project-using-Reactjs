import React from "react";
import "./../css/App.css";

function ToDoItem(props) {
  return (
    <div className="check-item">
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p>{props.item.text}</p>
    </div>
  );
}

export default ToDoItem;
