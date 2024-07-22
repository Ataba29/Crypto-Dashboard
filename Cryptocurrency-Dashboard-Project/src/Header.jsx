import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

// Import images
import menuOpenIcon from "./assets/menuopen.png";
import menuClosedIcon from "./assets/menuclosed.png";
import logo from "./assets/Logo.png";

// Define navigation tabs with their names and path for routing
const tabs = [
  { name: "Dashboard", path: "/Dashboard" },
  { name: "News", path: "/News" },
  { name: "About Us", path: "/AboutUs" },
];

export const Header = () => {
  // State to keep track of the menu's open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu's open/close status
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-br from-neutral-900 via-zinc-900 to-zinc-950 text-white p-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-lg font-bold">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-12 h-12" />
        </Link>
      </div>
      {/* Desktop navigation menu */}
      <div className="hidden sm:flex gap-4">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to={tab.path}
            className="text-white hover:text-gray-400 transition"
          >
            {tab.name}
          </Link>
        ))}
      </div>
      {/* Toggle button for mobile menu */}
      <button className="sm:hidden" onClick={toggleMenu}>
        {!isMenuOpen ? (
          <img src={menuOpenIcon} alt="Menu Open" className="w-9" />
        ) : (
          <img src={menuClosedIcon} alt="Menu Closed" className="w-9" />
        )}
      </button>
      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 bg-gradient-to-r from-purple-300 p-3 w-full z-20">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className="block p-4 text-white hover:text-gray-800 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      )}
      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
};

export default Header;
