import React from "react";
import "./../css/App.css";

function ToDoItem(props) {
    const chickedItem = {
        color: "gray",
        textDecoration: "line-through"
    }
  return (
    <div className="toDo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() =>{return props.handleChange(props.item.id)}}
      />
      <p style={ props.item.completed? chickedItem : null }>{props.item.text}</p>
    </div>
  );
}

export default ToDoItem;
