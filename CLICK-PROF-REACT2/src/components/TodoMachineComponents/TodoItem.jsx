import React from 'react';
import '../../css/TodoItem.css';
import axios from 'axios';

function TodoItem(props) {

  const [ids, setIds] = React.useState([])
  

 
  

const updateTodo = (id, text)=>{
  
  console.log(id, text)
  let cambio = prompt("editar")
  console.log(cambio)
  const data = {text: cambio}
  axios.put("/todos/"+ id, data).then(alert("el todo: " + text + "ha sido actualizado"));
  
}

  return (
    <li className="TodoItem" key="_id">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
     
      <span 
      className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        X
      </span>
      
     <button onClick={()=>updateTodo(props.todos._id,props.todos.text )}>{props.todos._id}</button>
    </li>
  );
}

export { TodoItem };
