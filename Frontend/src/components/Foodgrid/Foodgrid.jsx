import React from 'react';

const foodItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Sushi Platter',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Beef Burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Pasta Carbonara',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Thai Green Curry',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Caesar Salad',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    name: 'Chicken Tikka',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    name: 'Ramen Bowl',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
  },
];

export default function FoodGrid() {
  return (
    <div className="food-grid">
      {foodItems.map((item) => (
        <div key={item.id} className="food-card">
          <div className="food-card__image-wrapper">
            <img src={item.image} alt={item.name} className="food-card__image" />
          </div>
          <div className="food-card__content">
            <h3 className="food-card__title">{item.name}</h3>
            <div className="food-card__meta">
              <span>4.5k views • 2 days ago</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
