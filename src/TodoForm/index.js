import React from "react";
import { TodoContext } from "../TodoContext";
import  "./TodoForm.css";

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo,setOpenModal } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue); 
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>

            </label>
            <textarea
                placeholder="e.g read a book"
                onChange={onChange}
                value={newTodoValue}
            />
            <div>
                <button type= "button"  onClick={onCancel} >
                    Cancel
                </button>
                <button type= "submit" >
                    Add Todo
                </button>
            </div>
       </form>
    );
}


export { TodoForm };