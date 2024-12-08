import { HelmetProvider, Helmet } from "react-helmet-async";
import parse from "html-react-parser";
import './RecipeFormat.css';

export default function Recipe({ recipe }) {
  return (
    <HelmetProvider>
      <div className="recipe-page">
        <Helmet>
          <title>{recipe.title} FT</title>
        </Helmet>
        <div className="recipe-container">
          <div className="recipe-header">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <h1 className="recipe-title">{recipe.title}</h1>
            <div className="recipe-rating">
              <span className="rating-label">Rating: </span>
              <span className="rating-score">{Math.floor(recipe.spoonacularScore/10)}/10</span>
            </div>
          </div>
          
          <div className="recipe-content">
            <section className="recipe-section">
              <h2 className="section-title">Ingredients</h2>
              <ul className="ingredient-list">
                {recipe.extendedIngredients.map((ingredient, index) => (
                  <li key={index} className="ingredient-item">{ingredient.name}</li>
                ))}
              </ul>
            </section>

            <section className="recipe-section">
              <h2 className="section-title">Summary</h2>
              <div className="recipe-summary">{parse(recipe.summary)}</div>
            </section>

            <section className="recipe-section">
              <h2 className="section-title">Nutrition</h2>
              <ul className="nutrition-list">
                {recipe.nutrition.nutrients.map((nutrient, index) => (
                  <li key={index} className="nutrition-item">
                    <span className="nutrient-name">{nutrient.name}</span>
                    <span className="nutrient-value">{nutrient.amount} {nutrient.unit}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}