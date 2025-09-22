import React from "react"
import { useParams } from "react-router-dom";
import recipes from "./assets/Recipes.json"
function RecipeDetails(){
    var x=useParams()
    var selectedRecipes=recipes.recipes.find((recipe)=>{
        if(recipe.id==x.id){
            return true;
        }
    })
    return(
      <div>
        <h3>Recipe Details:</h3>
        <b>{selectedRecipes.name}</b>
        <img src={selectedRecipes.image}  width="200px" alt=""/>
        <ul>
            <b>Recipe Ingredients:</b>
            {
                selectedRecipes.ingredients.map((ing)=>{
                   return<li>{ing}</li>
                })
            }
        </ul>
        <ol>
           <b>Recipe Instructions</b>
            
            {
               selectedRecipes.instructions.map((ins)=>{
                return<li>{ins}</li>
               })
            }
        </ol>
      </div>
    );
}
export default RecipeDetails;