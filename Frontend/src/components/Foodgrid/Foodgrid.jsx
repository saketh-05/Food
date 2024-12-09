import React from 'react';
import { useNavigate } from 'react-router-dom';

const recommandedFoodItems = [
  {
    id: 658615,
    title: 'Roasted Peppers, Spinach & Feta Pizza',
    image: 'https://img.spoonacular.com/recipes/658615-312x231.jpg',
  },
  {
    id: 648506,
    title: 'Japanese Sushi',
    image: 'https://img.spoonacular.com/recipes/648506-312x231.jpg',
  },
  {
    id: 637631,
    title: 'Cheesy Bacon Burger with Spicy Chipotle Aiolo Sauce',
    image: 'https://img.spoonacular.com/recipes/637631-312x231.jpg',
  },
  {
    id: 655575,
    title: 'Penne Pasta with Broccoli and Cheese',
    image: 'https://img.spoonacular.com/recipes/655575-312x231.jpg',
  },
  {
    id: 645541,
    title: 'Green Thai Curry with Beef',
    image: 'https://img.spoonacular.com/recipes/645541-312x231.jpg',
  },
  {
    id: 662632,
    title: 'Sweet Summer Salad',
    image: 'https://img.spoonacular.com/recipes/662632-312x231.jpg',
  },
  {
    id: 1095743,
    title: 'Coconut Curry Ramen Noodles',
    image: 'https://img.spoonacular.com/recipes/1095743-312x231.jpg',
  },
  {
    id: 653472,
    title: 'Oatmeal Pancake (Yummy & Heart Healthy)',
    image: 'https://img.spoonacular.com/recipes/653472-312x231.jpg',
  },
  {
    id: 649777,
    title: 'Lemon Scented Polenta Pancakes with Blueberry Thyme Syrup',
    image: 'https://img.spoonacular.com/recipes/649777-312x231.jpg',
  },
  {
    id: 633751,
    title: 'Baked Pumpkin Chocolate Chip Pancakes',
    image: 'https://img.spoonacular.com/recipes/633751-312x231.jpg',
  },
];

export default function FoodGrid({searchResults}) {
  const navigate = useNavigate();
  const foodItems =  searchResults.length ? searchResults : recommandedFoodItems;
  const recipeID = (id) => {
    console.log(id);
    navigate(`/recipe/${id}`);
  };
  return (
    <div className="food-grid">
      {foodItems.map((item) => (
        <div key={item.id} className="food-card" onClick={() => recipeID(item.id)}>
          <div className="food-card__image-wrapper">
            <img src={item.image} alt={item.title} className="food-card__image" />
          </div>
          <div className="food-card__content">
            <h3 className="food-card__title">{item.title}</h3>
            <div className="food-card__meta">
              <span>4.5k views • 2 days ago</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
