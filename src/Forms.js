import { useState } from "react";
import ReactDOM from 'react-dom/client';
import Ayush from "./Ayush";

function MyForm() {
  const [name, setName] = useState("");
  Name:''
  Fathername:''
  Mothername:''
  Age:''
  Email:''
  Mobileno:''

const headleImput=(e)=>{
const name=e.target.name;
console.log(name);    
}
  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);