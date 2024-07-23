import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import logo from "../assets/Logo.png";

function Home() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-4 text-center
      ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-800 to-black text-white"
          : "bg-gradient-to-br from-gray-100 to-white text-black"
      }`}
    >
      <div className="mb-8">
        <img src={logo} alt="Logo" className="w-100 h-100 animate-spin-slow" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">
        Welcome to the Cryptocurrency Dashboard!
      </h1>
      <p className="mb-8 text-lg md:text-xl animate-fade-in">
        Your gateway to the crypto world.
      </p>
      <Link to="/Dashboard" className="animate-fade-in-up">
        <button
          className={`px-6 py-3 font-semibold rounded-lg shadow-lg transition
          bg-transparent border-2 border-blue-500 hover:border-blue-700
          text-blue-500 hover:text-blue-700
          relative overflow-hidden group
          ${
            isDarkMode
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-800"
          }
          `}
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 h-full w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out bg-gradient-to-r from-blue-500 to-purple-500 opacity-30"></div>
        </button>
      </Link>
    </div>
  );
}

export default Home;
