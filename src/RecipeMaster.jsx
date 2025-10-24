import React from "react"
import recipes from "./assets/Recipes.json"
import { Link } from "react-router-dom";
function RecipeMaster(){
    return(
        <div>
            <h3>Recipes Details Here:</h3>
            <ul>
            {recipes.recipes.map((recipe)=>{
                return(
                <li>
                  <Link to={`/recipeDetails/${recipe.id}`}>{recipe.name}</Link></li>
                )
            })}
            </ul>
        </div>
    )
}
export default RecipeMaster