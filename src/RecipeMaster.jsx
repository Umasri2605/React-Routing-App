import React from "react";
import recipes from "./assets/Recipes.json";
import { Link } from "react-router-dom";

function RecipeMaster() {
  return (
    <div className="container py-5" style={{ background: "#fff8f0", minHeight: "100vh" }}>
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#d35400" }}>
        🍽️ Our Signature Recipes
      </h2>

      <div className="row g-4">
        {recipes.recipes.map((recipe) => (
          <div className="col-md-4" key={recipe.id}>
            <div
              className="card rounded-4 shadow-lg border-0 h-100 recipe-card"
              style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
            >
              <img
                src={recipe.image}
                className="card-img-top rounded-top-4"
                alt={recipe.name}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold" style={{ color: "#e67e22" }}>
                  {recipe.name}
                </h5>
                <Link
                  to={`/recipeDetails/${recipe.id}`}
                  className="btn btn-outline-warning mt-3 px-4 fw-semibold"
                  style={{ transition: "all 0.3s" }}
                >
                  View Recipe
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .recipe-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 25px rgba(0,0,0,0.2);
        }
        .recipe-card .btn:hover {
          background-color: #e67e22;
          color: white;
          border-color: #e67e22;
        }
      `}</style>
    </div>
  );
}

export default RecipeMaster;

