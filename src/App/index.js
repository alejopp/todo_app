import React from 'react';
import { CreateButton } from '../CreateButton';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import './App.css';

const defaultTodos = [
  {text: 'Cut onios ', completed: true},
  {text: 'Take react intro course ', completed: false},
  {text: 'Practice English ', completed: false},
  {text: 'Practice Deutsch ', completed: true},
];


function App(props) {

  const [todos,setTodos] = React.useState(defaultTodos);
  const [searchValue,setSearchValue] = React.useState("");
  const completedTodos = todos.filter(todo => todo.completed == true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue >=1) {
    searchedTodos = todos
  }
  else{
    searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const  searchedText = searchValue.toLowerCase();
        return todoText.includes(searchedText);
   });


  }

  if (setSearchValue)

  return (
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
            completed={todo.completed}/>
        ))}
      </TodoList>
    </React.Fragment>

  );
}

export default App;
