import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../ThemeContext"; // Importing the ThemeContext for dark mode

export const useNewsLogic = () => {
  // State to hold all fetched news data
  const [newsData, setNewsData] = useState([]);
  // State to hold filtered news based on search term
  const [filteredNews, setFilteredNews] = useState([]);
  // Accessing dark mode status from the context
  const { isDarkMode } = useContext(ThemeContext);
  // State to hold the current search term
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch news data when the component mounts
  useEffect(() => {
    fetchNews();
  }, []);

  // Filter news whenever the search term changes
  useEffect(() => {
    filterNews();
  }, [searchTerm]);

  // Function to fetch news from the API
  const fetchNews = async () => {
    try {
      // Define the CORS proxy URL. This proxy helps bypass CORS restrictions by routing requests through a different domain.
      const corsProxy = "https://api.allorigins.win/raw?url=";

      // Define the API URL for fetching news data from CoinGecko.
      const apiUrl = "https://api.coingecko.com/api/v3/news";

      // Fetch the news data from the API through the CORS proxy.
      // Encode the API URL to ensure it is safely included in the request.
      const response = await fetch(corsProxy + encodeURIComponent(apiUrl));

      // Check if the response is not ok (e.g., status code is not in the range 200-299).
      // If the response is not ok, throw an error to be caught in the catch block.
      if (!response.ok) {
        throw new Error("Fetching response failed");
      }

      // Parse the JSON data from the response.
      const data = await response.json();

      // Update the state with the fetched news data.
      // Store the full list of news articles.
      setNewsData(data.data);

      // Also update the state for filtered news.
      // Initially, set it to the same data as `newsData` until a search term is applied.
      setFilteredNews(data.data);
    } catch (error) {
      // Log any errors that occur during the fetch or parsing process.
      // This could be a network error, a problem with the proxy, or an issue with the API.
      console.error("Error fetching news:", error);
    }
  };

  // Function to filter news based on the search term
  const filterNews = () => {
    if (!searchTerm) {
      setFilteredNews(newsData); // If no search term, show all news
      return;
    }
    // Filter news articles based on search term
    const filter = newsData.filter((article) => {
      const title = article.title?.toLowerCase() || "";
      const description = article.description?.toLowerCase() || "";
      const author = article.author?.toLowerCase() || "";
      const news_site = article.news_site?.toLowerCase() || "";

      return (
        title.includes(searchTerm.toLowerCase()) ||
        description.includes(searchTerm.toLowerCase()) ||
        author.includes(searchTerm.toLowerCase()) ||
        news_site.includes(searchTerm.toLowerCase())
      );
    });
    setFilteredNews(filter); // Update filtered news
  };

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update search term state
  };

  // Returning necessary values and functions
  return { filteredNews, searchTerm, handleSearchChange, isDarkMode };
};
