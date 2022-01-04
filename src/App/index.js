import React from 'react';
import './App.css';
import { AppUi } from './AppUI';

// const defaultTodos = [
//   {text: 'Cut onions', completed: true},
//   {text: 'Take react intro course ', completed: false},
//   {text: 'Practice English ', completed: false},
//   {text: 'Deutsch', completed: false},
// ];

//Customized hook to manipulate a var in localStorage
function useLocalStorage(itemName,initialValue){
  const localStorageItem = localStorage.getItem(itemName);
  console.log(localStorageItem);
  let parsedTodos;

  if (!localStorageItem) {
    //Pass to local storage an empty array, bacause localStorage only receives Strings
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedTodos = initialValue;
  }
  else{
    //We convert the strings to an JS array;
    parsedTodos = JSON.parse(localStorageItem);
    console.log(parsedTodos);
  }

  const [item,setItem] = React.useState(parsedTodos);

  const saveItem = (newTodos) =>{
    setItem(newTodos);
    localStorage.setItem(itemName,JSON.stringify(newTodos));
  };

  return[
    item,
    saveItem
  ];
  
}

function App(props) {

  const [todos,saveTodos] = useLocalStorage('TODOS_V1',[]);
  const [searchValue,setSearchValue] = React.useState('');
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
