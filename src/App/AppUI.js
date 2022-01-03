import React from 'react';
import { CreateButton } from '../CreateButton';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';

function AppUi({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){

    return(
        <React.Fragment>
        <TodoCounter
           completedTodos = {completedTodos}
           totalTodos = {totalTodos}
        />
        <TodoSearch
         searchValue = {searchValue}
         setSearchValue= {setSearchValue}  
        />
 
        <CreateButton/>
      
       <TodoList>
         {searchedTodos.map(todo => (
           <TodoItem 
             key = {todo.text} 
             text = {todo.text} 
             completed={todo.completed}
             onComplete = {() => completeTodo(todo.text)}
             onDelete = {()=>deleteTodo(todo.text)}/>
         ))}
       </TodoList>
     </React.Fragment>
    );

};


export {AppUi};