import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import TodoList from './TodoList.jsx';
import StudentsTable from './StudentsTable.jsx';
import Counter from './Counter.jsx';
import RecipeMaster from './RecipeMaster.jsx';
import RecipeDetails from './recipeDetails.jsx';
import StudentsForm from './StudentForm.jsx';
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
    {
        path:"todolist",
        element:<TodoList></TodoList>
    },
    {
        path:"table",
        element:<StudentsTable></StudentsTable>
    },
    {
       path:"counter",
       element:<Counter></Counter>
    },
    {
      path:"studentform",
      element:<StudentsForm></StudentsForm>
    },
    { 
       path:"recipe",
       element:<RecipeMaster></RecipeMaster>
    },
    {
        path:"/recipeDetails/:id",
        element:<RecipeDetails></RecipeDetails>
    }

   ],
    
},

]);  
     
    
createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
