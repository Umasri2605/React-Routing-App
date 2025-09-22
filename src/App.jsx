import React from "react"
import Counter from "./Counter.jsx"
import Student from "./StudentsTable.jsx"
import TodoList from "./TodoList.jsx"
import StudentForm from "./StudentForm.jsx"
import RecipeMaster from "./RecipeMaster.jsx"
import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className=" border border-2 border-danger p-4 m-4">
      <h1>Routing Components Here:</h1>
        <ul className="d-flex list-unstyled justify-content-between text-dark">
          <li>
            <Link to="/counter" style={{color:"black",textDecoration:"none"}}> Counter</Link><br/>
          </li>
          <li>
           <Link to="/todolist" style={{color:"black",textDecoration:"none"}}>TodoList</Link><br/>
          </li>
          <li>
           <Link to="/table" style={{color:"black",textDecoration:"none"}}>StudentsTable</Link><br/>
          </li>
          <li>
           <Link to="/studentform" style={{color:"black",textDecoration:"none"}}>StudentForm</Link><br/>
          </li>
          <li>
           <Link to="./recipe" style={{color:"black",textDecoration:"none"}}>RecipeMaster</Link>  
          </li>
          <li>
           <Link to="/studentform" style={{color:"black",textDecoration:"none"}}>StudentForm</Link><br/>
          </li>
          <li>  
           <Link to="./recipe" style={{color:"black",textDecoration:"none"}}>RecipeMaster</Link>
          </li>
        </ul>
        <div className="border border-1 m-3 p-3 border-warning">
          <Outlet></Outlet>
        </div>
      </div>
  );
}

export default App
