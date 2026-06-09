import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav className="thecocktailcave-nav-container">
      <div className="thecocktailcave-nav-bar">
        <Link
          to="/"
          className="thecocktailcave-logo"
          onClick={() => setIsOpen(false)}
        >
          The.Cocktail.Cave
        </Link>

        <button className="thecocktailcave-toggle" onClick={toggleMenu}>
          {isOpen ? "✕" : "═"}
        </button>
      </div>

      {isOpen && (
        <div className="thecocktailcave-dropdown">
          <ul className="thecocktailcave-links-list">
            <li>
              <button onClick={() => handleNavigation("/")}>Home</button>
            </li>

            <li>
              <button onClick={() => handleNavigation("/menu-page")}>
                Menu
              </button>
            </li>

            <li>
              <button onClick={() => handleNavigation("/events")}>
                Events
              </button>
            </li>

            <li>
              <button onClick={() => handleNavigation("/contact")}>
                Contact Us
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNavigation("/contact")}
                className="thecocktailcave-book-link"
              >
                Book a Table
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
