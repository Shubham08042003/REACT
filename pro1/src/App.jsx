import React, { useState } from 'react'

const App = () => {
  //let counter=15;
  const [counter,setcounter] =useState(15);
  const addvalue=()=>{
    setcounter(counter+1);
  }
  const removevalue=()=>{
    setcounter(counter-1);
  }
  return (
    <>
    <h1> React course  with Shubham </h1>
    <h2>counter value:</h2>
    <button onClick={addvalue}>Add value</button>{"  "}
    <button onClick={removevalue}>remove value</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App