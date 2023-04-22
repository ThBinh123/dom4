import logo from './logo.svg';
import './App.css';
import StudentList from "./StudentList";
import { useState, useEffect} from "react";
function App() {
  
  const[x, setX]= useState(0);
  const[text, setText]= useState("Meo");
  const[name, setName]= useState("");
  const handle_Increase = () =>{
    setX((pre) => pre + 1)
    setX((pre) => pre + 1)
  }
  const handle_Change_Text = (e) =>{
    e.preventDefault();
    setText(name);
  }
  const handle_change_name = (event) =>{
    setName(event.target.value);
  }
  return (
    <div>
      <h2>up lan 2</h2>
      < StudentList />
      <h1>{x}</h1>
      <h1>Name:{text}</h1>
      <button onClick={handle_Increase}>Increase</button>
      <button onClick={handle_Change_Text}>Change Text</button>
      <form onSubmit={handle_Change_Text}>
        <input type="text" placeholder='Name' value={name} onChange={handle_change_name}></input>
      </form>
    </div>
   
  );
}

export default App;
