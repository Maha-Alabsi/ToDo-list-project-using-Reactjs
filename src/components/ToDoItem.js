import React from 'react';
import './../css/App.css'
function ToDoItem(props){
    return(
        <div className="check-item">
        <input type="checkbox" checked={props.status}/>
        <p>{props.text}</p>
        </div>
    );
}

export default ToDoItem;