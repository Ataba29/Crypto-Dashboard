import React from "react";
import { NewsStyles } from "./NewsStyles";

// Helper function to truncate news description to a maximum length
const truncateDescription = (description) => {
  const maxLength = 150;
  // Truncate description if it exceeds max length, adding ellipsis
  if (description && description.length > maxLength) {
    return `${description.substring(0, maxLength)}...`;
  }
  return description || "";
};

// Function to render a list of news articles
export const renderNews = (filteredNews, isDarkMode) => {
  // Get styles based on dark mode setting
  const styles = NewsStyles(isDarkMode);

  return filteredNews.map((article, index) => (
    <div key={index} className={styles.articleContainerClass}>
      {/* Container for article image with background styling */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover rounded-xl"
        style={{
          backgroundImage: `url(${
            article.thumb_2x || "/path/to/placeholder-image.jpg" // Fallback to placeholder image if no thumbnail
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Container for article content */}
      <div className={styles.articleContentClass}>
        <div>
          {/* Display source of the news */}
          <div className={styles.sourceClass}>
            {article.news_site || "Unknown Source"}
          </div>
          {/* Title of the article with link */}
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.titleLinkClass}
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
          >
            {article.title}
          </a>
          {/* Truncated description of the article */}
          <p className="mt-2">{truncateDescription(article.description)}</p>
        </div>
        {/* Display author if available */}
        {article.author && (
          <p className={styles.authorClass}>{`By ${article.author}`}</p>
        )}
      </div>
    </div>
  ));
};
