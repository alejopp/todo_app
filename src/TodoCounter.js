import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos}){
    return(
        <h2 className='TodoCounter'>You've completed {completedTodos} from {totalTodos} TODOS</h2>
    );
}

export { TodoCounter };