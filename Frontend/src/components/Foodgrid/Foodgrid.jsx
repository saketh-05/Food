import React from 'react';
import { useNavigate } from 'react-router-dom';

const recommandedFoodItems = [
  {
    id: 1,
    title: 'Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Sushi Platter',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Beef Burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Pasta Carbonara',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Thai Green Curry',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Caesar Salad',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Chicken Tikka',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Ramen Bowl',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
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
