import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Function to determine the initial theme
  const getInitialTheme = () => {
    // Check if theme is stored in localStorage
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }
    // Check system preference for dark mode
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  // State to manage the theme
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  // Effect to apply theme and update localStorage
  useEffect(() => {
    // Toggle 'dark' class on <html> element
    document.documentElement.classList.toggle("dark", isDarkMode);
    // Store current theme in localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Provide the theme state and updater function to children components
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
