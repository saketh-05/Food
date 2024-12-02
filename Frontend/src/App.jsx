import React from 'react';
import { Twitter, Instagram, Mail } from 'lucide-react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import FoodGrid from './components/Foodgrid/Foodgrid';
import './App.css';
import './components/Navbar/Navbar.css';
import './components/Header/Header.css';
import './components/Foodgrid/Foodgrid.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Navbar />
        <main className="app__main">
          <FoodGrid />
        </main>
        {/* footer begins :{) */}
      <footer className="app__footer">
        <div className="app__socials">
          <a href="#" className="app__social-link">
            <Twitter className="app__icon" />
          </a>
          <a href="#" className="app__social-link">
            <Instagram className="app__icon" />
          </a>
          <a href="#" className="app__social-link">
            <Mail className="app__icon" />
          </a>
        </div>
      </footer>
      </div>
      
    </div>
  );
}

export default App;
