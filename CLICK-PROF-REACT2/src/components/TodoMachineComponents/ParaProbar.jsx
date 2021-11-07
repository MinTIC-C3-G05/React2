import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ParaProbar(props) {

 // Estado de los todos
 const [newTodo, setNewTodo] = useState({text:'', completed:false,})

  
const handleChange = (e) =>{
  const miNuevoTodo = e.target.value
  setNewTodo({...newTodo, text:e.target.value})
  console.log(newTodo)  
}


const handleSubmit = () =>{
  console.log("desde el handle submit")
 
  // Validar datos
  if(newTodo===""){
    alert('todos los campos son obligatorios')
    
    return
  }
    // const requestInit = {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(newTodo)
    // }



    // Consulta POST
    // fetch('https://backend-notas.herokuapp.com/api/todos', requestInit)
    // .then(res =>res.json())
    // .then(res =>console.log("se logro"))

    axios.post('/todos', newTodo)
    .then(response => this.setState({ newTodo: response.data })).then(alert("Added successfully"));
    
  
}


  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="todoName" className="form-label"> todoName</label>
        <input onChange={handleChange} name= "todoName" type="text" placeholder="Insert your todo" className="form-control"></input>
        <button  className="btn btn-primary" >
          Probar
      </button>
      </form>
    
    </div>
  );
}

export {ParaProbar};