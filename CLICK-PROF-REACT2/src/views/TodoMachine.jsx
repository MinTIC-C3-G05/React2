import React, { useState, useFocusEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";

import { TodoCounter } from "../components/TodoMachineComponents/TodoCounter";
import { TodoSearch } from "../components/TodoMachineComponents/TodoSearch";
import { TodoList } from "../components/TodoMachineComponents/TodoList";
import { TodoItem } from "../components/TodoMachineComponents/TodoItem";
import { CreateTodoButton } from "../components/TodoMachineComponents/CreateTodoButton";
import { ParaProbar } from "../components/TodoMachineComponents/ParaProbar";

const defaultTodos = [];



function TodoMachine(props) {
  const [post, setPost] = React.useState([]);
  


  React.useEffect(() => {
    axios.get("/todos").then((response) => {
      setPost(response.data);
      // console.log(response.data)
    });
  },[props]);


  post.map((post) => defaultTodos.push(post));
  console.log(defaultTodos);

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length == 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((item) => {
      const todoText = item.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }



 

  //  COMPLETAR TODOS
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  // ELIMINAR TODOS
  const deleteTodo = (text) => {
    console.log("cual es el indice que aparece?"+text)
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    axios.delete('/todos/'+text ).then(alert("It was deleted successfully!"))
        // .then(() => setStatus('Delete successful'));
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  
  const [ids, setIds] = React.useState(["casa", "carro", "cinco", "tres", "quince"])

  defaultTodos.forEach(element => {
    console.log(element)
    
    ids.push(element)
    
  });
    console.log("los ids son:" + ids)


  return (
    <React.Fragment>
      <ParaProbar ></ParaProbar>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todos) => (
          <TodoItem
            ids = {ids}
           hola="texto desde todomachine"
            key={todos._id}
            text={todos.text}
           
           
            completed={todos.completed}
            onComplete={() => completeTodo(todos.text)}
            onDelete={() => deleteTodo(todos._id)}
          />
        ))}
        
      </TodoList>
      

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default TodoMachine;
