import React from 'react';
import '../../css/TodoItem.css';

function TodoItem(props) {
  
  let {defaultTodos} = props
 
  

const updateTodo = (props)=>{
  
  // axios.put('/todos/'+ props._id, article)
  // .then(response => this.setState({ updatedAt: response.data.updatedAt }));
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
      
     
    </li>
  );
}

export { TodoItem };
