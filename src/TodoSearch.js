import React from "react";
import './TodoSearch.css'

function TodoSearch(){

    const [searchValue, setSearchValue] = React.useState("");
    const onSearch = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return [
        <input  
            className="TodoSearch"
            placeholder='Onion'
            value={searchValue}
            onChange={onSearch}
        />,
        <p>{searchValue}</p>
    ];
}

export { TodoSearch };