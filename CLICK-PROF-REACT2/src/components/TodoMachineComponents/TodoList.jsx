import React from 'react';
import '../../css/TodoList.css'

function TodoList(props) {

  

  return (
    <section key="_id">
      <ul key="_id">
        {props.children}
        {props.defaultTodos}
      </ul>
    </section>
  );
}

export { TodoList };
