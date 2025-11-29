import React from "react";
import { useParams } from "react-router-dom";
import recipes from "./assets/Recipes.json";

function RecipeDetails() {
  var x = useParams();

  var selectedRecipes = recipes.recipes.find((recipe) => {
    return recipe.id == x.id;
  });

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 fw-bold text-primary">🍽️ Recipe Details</h2>

      <div className="card shadow-lg border-0 rounded-4 p-4">
        <div className="text-center">
          <h3 className="fw-bold mb-3">{selectedRecipes.name}</h3>
          <img
            src={selectedRecipes.image}
            width="300px"
            className="img-fluid rounded-4 shadow"
            alt=""
          />
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card p-3 border-0 shadow-sm rounded-4 bg-light">
              <h5 className="fw-bold text-success">🥗 Ingredients</h5>
              <ul className="list-group list-group-flush mt-2">
                {selectedRecipes.ingredients.map((ing) => (
                  <li className="list-group-item">{ing}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-3 border-0 shadow-sm rounded-4 bg-light">
              <h5 className="fw-bold text-warning">👨‍🍳 Instructions</h5>
              <ol className="list-group list-group-numbered mt-2">
                {selectedRecipes.instructions.map((ins) => (
                  <li className="list-group-item">{ins}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
