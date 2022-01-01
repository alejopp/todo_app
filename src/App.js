import React from 'react';
import { CreateButton } from './CreateButton';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import './App.css';


const todos = [
  {text: 'Cut onios ', completed: false},
  {text: 'Take react intro course ', completed: false},
  {text: 'Practice English ', completed: false},
  {text: 'Practice Deutsch ', completed: false},
];

function App(props) {
  return (
    <React.Fragment>
       <TodoCounter />
       <TodoSearch />
       <CreateButton/>
     
      <TodoList>
        {todos.map(todo => (
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
