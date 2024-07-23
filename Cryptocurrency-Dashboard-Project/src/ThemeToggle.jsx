// src/ThemeToggle.js
import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 text-white hover:bg-gray-700 rounded"
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
