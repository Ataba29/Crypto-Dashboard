import React from "react";
import { useNewsLogic } from "./NewsLogic"; // Custom hook to manage news logic
import { NewsStyles } from "./NewsStyles"; // Importing styles based on the theme mode
import { renderNews } from "./NewsRenderer"; // Function to render news items

const News = () => {
  // Destructuring values and functions from the custom hook
  const { filteredNews, searchTerm, handleSearchChange, isDarkMode } =
    useNewsLogic();

  // Getting the styles based on the current theme mode (dark or light)
  const styles = NewsStyles(isDarkMode);

  return (
    <div className={styles.containerClass}>
      {/* Title of the news section */}
      <h1 className={styles.titleClass}>Latest Cryptocurrency News</h1>

      {/* Search bar for filtering news */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          className={styles.searchBarClass}
          placeholder="Search news"
          value={searchTerm}
          onChange={handleSearchChange} // Handling search input change
        />
      </div>

      {/* Conditional rendering based on whether there are news items */}
      {filteredNews.length === 0 ? (
        <p className="text-lg text-center">No News Found...</p>
      ) : (
        renderNews(filteredNews, isDarkMode) // Rendering the filtered news
      )}
    </div>
  );
};

export default News; // Exporting the News component for use in other parts of the application
