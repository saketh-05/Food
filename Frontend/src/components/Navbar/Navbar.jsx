import React from "react";
import { Home, Info, HelpCircle, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Info, label: "About", path: "/about" },
  { icon: HelpCircle, label: "Help", path: "/help" },
  { icon: User, label: "Profile", path: "/profile" },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className='navbar'>

      <div className='navbar__items'>
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`navbar__link ${
              location.pathname === item.path ? "navbar__link--active" : ""
            }`}
          >
            <item.icon className='navbar__icon' />
            <span className='navbar__label'>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
