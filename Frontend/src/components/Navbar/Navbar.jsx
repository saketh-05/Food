import React from 'react';
import { Home, Info, HelpCircle, User } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: Info, label: 'About' },
  { icon: HelpCircle, label: 'Help' },
  { icon: User, label: 'Profile' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__items">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className="navbar__link"
          >
            <item.icon className="navbar__icon" />
            <span className="navbar__label">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
