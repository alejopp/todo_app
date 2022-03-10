import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch(){
    const { searchValue, setSearchValue } = useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    
    return [
        <input  
            className="TodoSearch"
            placeholder='Search your task here!'
            value={searchValue}
            onChange={onSearchValueChange}
        />,
    ];
}

export { TodoSearch };