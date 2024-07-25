import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import logo from "../../public/Logo.png";

function Home() {
  // Get the isDarkMode state from the ThemeContext
  const { isDarkMode } = useContext(ThemeContext);

  return (
    // Main container for the Home component
    <div
      className={`flex flex-col items-center justify-center min-h-full p-4 text-center
      ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-800 to-black text-white"
          : "bg-gradient-to-br from-gray-100 to-white text-black"
      }`}
    >
      {/* Logo and animation */}
      <div className="mb-8">
        <img
          src={logo}
          alt="Logo"
          className="w-[50vw] max-w-[500px] min-w-[200px] h-auto sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw] animate-spin-slow"
        />
      </div>

      {/* Welcome message */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">
        Welcome to the Cryptocurrency Dashboard!
      </h1>

      {/* Description */}
      <p className="mb-8 text-lg md:text-xl animate-fade-in">
        Your gateway to the crypto world.
      </p>

      {/* Button to navigate to the dashboard */}
      <Link to="/Dashboard" className="animate-fade-in-up">
        <button
          className={`px-6 py-3 font-semibold rounded-lg shadow-lg transition
          bg-transparent border-2 animate-border-color
          relative overflow-hidden group
          ${isDarkMode ? "hover:text-white" : "hover:text-black"}
          `}
        >
          {/* Button text with animation */}
          <span className="relative z-10 animate-text-color">Get Started</span>
          {/* Background gradient */}
          <div className="absolute inset-0 h-full w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out bg-gradient-to-r from-blue-500 to-purple-500 opacity-30"></div>
        </button>
      </Link>
    </div>
  );
}

export default Home;
