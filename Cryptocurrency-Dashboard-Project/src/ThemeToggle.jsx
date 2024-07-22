import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    console.log(
      "Dark mode class applied:",
      document.documentElement.classList.contains("dark")
    ); // Debugging line
  }, [isDarkMode]);

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
