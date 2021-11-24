import React, {useState} from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App(){
  const [message, setMessage] = useState()

  const handleClick1 = async () => {
    const response = await axios.get('http://localhost:8080/getdata1')
setMessage(response.data);
    console.log("button 1");
  }

  const handleClick2 = async () => {
    const response = await axios.get('http://localhost:8080/getdata2')
setMessage(response.data);
    console.log("button 2");
  }



  


  return(
    <div className="App">
      <h1>CLICK US</h1>
      <button onClick={handleClick1}>BUTTON 1</button>
      <button onClick={handleClick2}>BUTTON 2</button>
      <h2>{message}</h2>
    </div>
  )
}

export default App;