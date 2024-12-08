import { HelmetProvider, Helmet } from "react-helmet-async";
import parse from "html-react-parser";
export default function Recipe({ recipe }) {

  return (
    <HelmetProvider>
      <div className='recipe-page'>
        <Helmet>
          <title>{recipe.title} FT</title>
        </Helmet>
        <div className='recipe-container'>
            <div className='recipe-image-title'>
              <img src={recipe.image} alt='Recipe' className='w-full' />
              <h2 className='text-2xl font-bold mt-8 mb-4'>{recipe.title}</h2>
            </div>
            <div className='recipe-data'>
              <h2 className='text-2xl font-bold mb-4'>Ingredients</h2>
              <ul className='ingredient-list'>
                {recipe.extendedIngredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.name}</li>
                ))}
              </ul>
              <h2 className='text-2xl font-bold mt-8 mb-4'>Summary</h2>
              <p>{parse(recipe.summary)}</p>
              <h2 className='text-2xl font-bold mt-8 mb-4'>Nutrition</h2>
              <ul className='nutrition-list'>
                {recipe.nutrition.nutrients.map((nutrient, index) => (
                  <li key={index}>{nutrient.name} = {nutrient.amount} {nutrient.unit}</li>
                ))}
              </ul>
              <h2 className='text-2xl font-bold mt-8 mb-4'>
                Rating(as per SpoonacularScore)
              </h2>
              <p>{Math.floor(recipe.spoonacularScore/10)}/10</p>
            </div>
          </div>
      </div>
    </HelmetProvider>
  );
}
