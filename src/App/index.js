import React from 'react';
import './App.css';
import { AppUi } from './AppUI';

const defaultTodos = [
  {text: 'Cut onions', completed: true},
  {text: 'Take react intro course ', completed: false},
  {text: 'Practice English ', completed: false},
  {text: 'Deutsch', completed: false},
];

function App(props) {
  //LocalStorage
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  console.log(localStorageTodos);
  let parsedTodos;

  if (!localStorageTodos) {
    //Pass to local storage an empty array, bacause localStorage only receives Strings
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos = [];
  }
  else{
    //We convert the strings to an JS array;
    parsedTodos = JSON.parse(localStorageTodos);
    console.log(parsedTodos);
  }

  const [todos,setTodos] = React.useState(parsedTodos);
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

const completeTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [...todos];
  newTodos[todoIndex].completed = true;
  saveTodos(newTodos);
};

const deleteTodo = (text) => {
  const newTodos = todos.filter(todo => todo.text !== text);
  saveTodos(newTodos);
};

const saveTodos = (newTodos) =>{
  setTodos(newTodos);
  localStorage.setItem('TODOS_V1',JSON.stringify(newTodos));
};

  return (
    < AppUi 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}/>
  );
}

export default App;
