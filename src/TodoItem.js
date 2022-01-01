import React from "react";
import './TodoItem.css'

function TodoItem(props){
  const onCompleted = () => {
    alert("good job! You've finished the task succesfully");
  }

  const onDelete = () => {
    alert("The task has been deleted");
  }
    return (
        <li className="TodoItem">
          <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={onCompleted}>
            √
          </span>
          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
          </p>
          <span className="Icon Icon-delete"
          onClick={ onDelete}>
            X
          </span>
        </li>
      );
}

export { TodoItem }; 