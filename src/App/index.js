import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
// const defaultTodos = [
//   {text: 'Cut onions', completed: true},
//   {text: 'Take react intro course ', completed: false},
//   {text: 'Practice English ', completed: false},
//   {text: 'Deutsch', completed: false},
// ];

//Customized hook to manipulate a var in localStorage
function App(){
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
