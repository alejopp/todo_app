import React from "react";
import './CreateButton.css';

function CreateButton(){
    const onAddToDo = () => {
        alert("Add to do");
    }
    return (
        <button className="CreateButton"
        onClick={onAddToDo}>+</button>
    );
}

export { CreateButton };