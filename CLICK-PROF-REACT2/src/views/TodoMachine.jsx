import React, { useState } from "react";
import axios from "axios";

import { TodoCounter } from "../components/TodoMachineComponents/TodoCounter";
import { TodoSearch } from "../components/TodoMachineComponents/TodoSearch";
import { TodoList } from "../components/TodoMachineComponents/TodoList";
import { TodoItem } from "../components/TodoMachineComponents/TodoItem";
import { CreateTodoButton } from "../components/TodoMachineComponents/CreateTodoButton";
import { ParaProbar } from "../components/TodoMachineComponents/ParaProbar";

const defaultTodos = [{ text: "Cortar cebolla", completed: true }];

const sujeto = { nombre: "Diego" };

function TodoMachine(props) {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get("/todos").then((response) => {
      setPost(response.data);
      // console.log(response.data)
    });
  }, []);

  // post.map(post=>console.log("desde la consola" + post))
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
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todos) => (
          <TodoItem
            key={todos.text}
            text={todos.text}
            completed={todos.completed}
            onComplete={() => completeTodo(todos.text)}
            onDelete={() => deleteTodo(todos.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      <ParaProbar sujeto={sujeto} animal="caballo"></ParaProbar>
    </React.Fragment>
  );
}

export default TodoMachine;
