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

const completeTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [...todos];
  newTodos[todoIndex].completed = true;
  setTodos(newTodos);
};

const deleteTodo = (text) => {
  const newTodos = todos.filter(todo => todo.text !== text);
  setTodos(newTodos);
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
