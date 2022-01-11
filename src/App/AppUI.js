import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { CreateButton } from '../CreateButton';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI(){
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return(
      <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
          {error && <p>Ups someting was wrong...</p>}
          {loading && <p>Loading...</p>}
          {(!loading && !searchedTodos.length) && <p>¡Create your first todo!</p>}
          
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}

        </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <CreateButton
        setOpenModal={setOpenModal}
      />
   </React.Fragment>
  );

};

export {AppUI};