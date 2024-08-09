import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

// Import images
import menuOpenIcon from "../public/menuopen.png";
import menuClosedIcon from "../public/menuclosed.png";
import logo from "../public/Logo.png";

// Define navigation tabs with their names and path for routing
const tabs = [
  { name: "Dashboard", path: "/Dashboard" },
  { name: "News", path: "/News" },
  { name: "About Us", path: "/AboutUs" },
  { name: "FAQ", path: "/FAQ" },
];

export const Header = () => {
  // State to keep track of the menu's open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu's open/close status
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-br from-neutral-900 via-zinc-900 to-zinc-950 text-white sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo and Desktop Navigation */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link to="/" className="text-lg font-bold">
            <img src={logo} alt="Logo" className="w-12 h-12" />
          </Link>

          {/* Desktop navigation menu */}
          <div className="hidden md:flex space-x-4">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.path}
                className="text-white hover:text-gray-400 transition px-3 py-2 rounded-md hover:bg-gray-700"
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Toggle button for mobile menu */}
          <button className="md:hidden" onClick={toggleMenu}>
            {!isMenuOpen ? (
              <img src={menuOpenIcon} alt="Menu Open" className="w-9" />
            ) : (
              <img src={menuClosedIcon} alt="Menu Closed" className="w-9" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-800 rounded-md overflow-hidden">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className="block px-4 py-2 text-white hover:bg-gray-700 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
