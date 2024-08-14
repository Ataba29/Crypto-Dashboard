import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext"; // Importing the ThemeContext to access the theme mode
import FAQView from "./FAQView"; // Importing the FAQView component

const FAQ = () => {
  // Accessing the current theme mode (dark or light) from ThemeContext
  const { isDarkMode } = useContext(ThemeContext);

  // Rendering the FAQView component and passing the theme mode as a prop
  return <FAQView isDarkMode={isDarkMode} />;
};

export default FAQ; // Exporting the FAQ component for use in other parts of the application
