import React, { useState, useEffect } from 'react';


function ParaProbar(props) {


  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(-8);
  const [probar, setProbar] = useState('')
  console.log(props.sujeto.nombre)


  useEffect(() =>{
      <p>nuevo</p>   
  }, [probar])

  return (
    <div>
      <p>You clicked {count} times</p>
  
      
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      
    
      <p>estoy probando sí funciona {probar}</p>
      <p>{props.sujeto.nombre}</p>
      <button onClick ={() => setProbar('hola')}>
          Probar
      </button>
    </div>
  );
}

export {ParaProbar};