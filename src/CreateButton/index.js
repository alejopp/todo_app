import React from "react";
import './CreateButton.css';

function CreateButton(props){
    const onAddToDo = () => {
        props.setOpenModal(prevState => !prevState);
    }
    return (
        <button className="CreateButton"
        onClick={onAddToDo}>+</button>
    );
}

export { CreateButton };