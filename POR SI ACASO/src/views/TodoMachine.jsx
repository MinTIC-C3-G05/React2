import React from 'react';

import {TodoCounter} from '../components/TodoCounter'
import {TodoSearch} from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import {ParaProbar} from '../components/ParaProbar';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true, edad:'34'},
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
  { text: 'Uno mas', completed: false },
];

const sujeto = {nombre: 'Diego'};

function TodoMachine() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('');

 const completedTodos = todos.filter(todo => todo.completed === true).length;
 const totalTodos = todos.length;

 let searchedTodos = [];

 if (searchValue.length == 0){
   searchedTodos = todos;
 }else{
   searchedTodos = todos.filter(item =>{

    const todoText = item.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
   });
   
 }

  return (
    <React.Fragment>
      <TodoCounter 
      total = {totalTodos}
      completed = {completedTodos}
      />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todos => (
          <TodoItem
            key={todos.text}
            text={todos.text}
            completed={todos.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      <ParaProbar sujeto={sujeto} animal='caballo'>
        
      </ParaProbar>
      </React.Fragment>
  );
}

export default TodoMachine;
