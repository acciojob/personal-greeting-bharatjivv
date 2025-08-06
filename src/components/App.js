
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [ name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value.trim());
    console.log(e.target.value);
  }
  
  
  return (
    <div>
      <p>Enter your name:</p>
      <input type="text" value={name} onChange={handleChange}/>
      {
        name && <p>Hello, {name}!</p>
      }
    </div>
  )
}

export default App
