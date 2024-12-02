import React from 'react';
import { Search, Utensils } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="header__icon">
        <Utensils className="utensils-icon" />
      </div>
      <h1 className="header__title">FoodTube</h1>
      <div className="header__center">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search for recipes..."
              className="search-input"
            />
            <Search className="search-icon" />
          </div>
      </div>
      {/* <div className="header__right">
        <button className="header__button">Log out</button>
      </div> */}
      
    </header>
  );
}
