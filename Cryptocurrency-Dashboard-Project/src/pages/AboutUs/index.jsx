import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext"; // Importing the ThemeContext to access theme state
import AboutUsView from "./AboutUsView"; // Importing the AboutUsView component to render the about us page

const AboutUs = () => {
  // Accessing the isDarkMode value from ThemeContext to determine the current theme
  const { isDarkMode } = useContext(ThemeContext);

  // Rendering the AboutUsView component and passing isDarkMode as a prop
  return <AboutUsView isDarkMode={isDarkMode} />;
};

export default AboutUs;
