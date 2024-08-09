//importing hooks
import React, { useState, useEffect, useContext } from "react";
//importing ThemeContext for light and dark mode
import { ThemeContext } from "../ThemeContext";

// functions News fetchs news from an API and shows them on the screen
const News = () => {
  //state thats hold the news that are fethced from the API , only runs once when you enter the news page
  const [newsData, setNewsData] = useState([]);
  //state that holds filtered news after typing the search bar, runs in each time you chnage the searchTerm "type or remove something in the search bar"
  const [filteredNews, setFilteredNews] = useState([]);
  //state to holds the drak snd light mode
  const { isDarkMode } = useContext(ThemeContext);
  //state that holds the search that was inputed by the user
  const [searchTerm, setSearchTerm] = useState("");

  //empty array depencies which means fetch news will be called when ever News fuction called
  useEffect(() => {
    fetchNews();
  }, []);

  //filtered function will be called only after the state of the seacrh changes
  useEffect(() => {
    filterNews();
  }, [searchTerm]);

  //fetching news fucntion
  const fetchNews = async () => {
    try {
      //fetchins news from an api
      const response = await fetch("https://api.coingecko.com/api/v3/news");
      //checking if the fetch was successful else throw an error
      if (!response.ok) {
        throw new Error("Fetching response failed");
      }
      //saving all the fetched news in data as json to pasre it later
      const data = await response.json();
      //calling the setter function to change the state of newsdata
      setNewsData(data.data);
      //initialize filteredNews with all news data
      setFilteredNews(data.data);
    } catch (error) {
      //handle error as needed for exmaple show error message
      console.error("Error fetching news:", error);
    }
  };

  //function to filter the news based on what was typed in the search box
  const filterNews = () => {
    //search box is empty then change the state and show all the news
    if (!searchTerm) {
      setFilteredNews(newsData);
      return;
    }
    //itterate over all the articles in newsdata
    const filter = newsData.filter((article) => {
      //check in each article if article.title is not null or undefined
      let title = "";
      if (article.title != null) {
        //if not null change all the letters to lower case in order to make filtering easier
        title = article.title.toLowerCase();
      }

      //check in each article if article.description is not null or undefined
      let description = "";
      if (article.description != null) {
        //if not null change all the letters to lower case in order to make filtering easier
        description = article.description.toLowerCase();
      }

      //check in each article if article.description is not null or undefined
      let author = "";
      if (article.author != null) {
        //if not null change all the letters to lower case in order to make filtering easier
        author = article.author.toLowerCase();
      }

      //check in each article if article.description is not null or undefined
      let news_site = "";
      if (article.news_site != null) {
        //if not null change all the letters to lower case in order to make filtering easier
        news_site = article.news_site.toLowerCase();
      }

      //check if searchTerm is included in any of the article properties
      return (
        (title && title.includes(searchTerm.toLowerCase())) ||
        (description && description.includes(searchTerm.toLowerCase())) ||
        (author && author.includes(searchTerm.toLowerCase())) ||
        (news_site && news_site.includes(searchTerm.toLowerCase()))
      );
    });
    //change the state of the filtered news
    setFilteredNews(filter);
  };

  const renderNews = () => {
    //iterate over al the articles in the news and build for each article build a grid for it
    return filteredNews.map((article, index) => (
      <div
        // an index for the current article
        key={index}
        //buiding a div for article while desgining it with tailwind making the div centered with round corners and adding dark and light mode to it
        //and adding vertical padding
        className={`max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4 relative ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div
          //adding a background image of taking the whole div area with a round croners to match the father's desgin div
          className="absolute top-0 left-0 w-full h-full bg-cover rounded-xl"
          style={{
            //taking the image from the article if not found use a palce holder image
            backgroundImage: `url(${
              article.thumb_2x || "/path/to/placeholder-image.jpg"
            })`,
            //cover the whole continer's area
            backgroundSize: "cover",
            //dont repreat the back ground image
            backgroundRepeat: "no-repeat",
            //center the back ground image relative to the contianer
            backgroundPosition: "center",
          }}
        ></div>
        <div
          // news container here eveyhting written above the background image
          // using dark light mode
          className={`relative p-8 rounded-xl ${
            isDarkMode
              ? "bg-gray-900 text-white"
              : "bg-gray-200 bg-opacity-300 text-black"
          } bg-opacity-75`}
        >
          <div>
            <div
              //website name section making the name of the new's website source in captial letters and bold
              className={`uppercase tracking-wide text-sm font-semibold ${
                //adding to it dark and light features and if the website name is null wrie instead "Unkown source"
                isDarkMode ? "text-indigo-400" : "text-indigo-500"
              }`}
            >
              {article.news_site || "Unknown Source"}
            </div>
            <a
              //title section and link it the the article's source website
              href={article.url}
              //open the page in a new tab
              target="_blank"
              //adding security measures
              rel="noopener noreferrer"
              //making the title bold and add underline when the mouse is on the title
              className="block mt-1 text-lg leading-tight font-semibold hover:underline"
              //adding shdaow effects for better readblity
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
            >
              {article.title}
            </a>
            <p
              // description section calling truncateDescription function
              className="mt-2"
            >
              {truncateDescription(article.description)}
            </p>
          </div>
          {article.author && (
            <p
              //first check if the athuor name is not null
              //author article section adding drak and light mode to it
              className={`mt-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >{`By ${article.author}`}</p>
          )}
        </div>
      </div>
    ));
  };

  //this function truncate the description length to prevent large description that would make the continer too big
  const truncateDescription = (description) => {
    //determine the number of chars you want to have at maximun
    const maxLength = 150;
    //if the description length is bigger than the max length then cut the description to max length
    if (description.length > maxLength) {
      return `${description.substring(0, maxLength)}...`;
    }
    //else return description as it is
    return description;
  };

  //listner to any chnage happen in the search bar
  const handleSearchChange = (event) => {
    //change the state of searchTerm on input change
    setSearchTerm(event.target.value);
  };

  return (
    //the div takes the full height of the page and adding dark and ligth mode
    <div
      className={
        "min-h-screen px-4 py-8 " +
        (isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black")
      }
    >
      <h1
        // adding a title which is centered and bold with some padding beneth it
        className="text-3xl font-semibold mb-4 text-center"
      >
        Latest Cryptocurrency News
      </h1>
      <div className="mb-4 flex justify-center">
        <input
          //adding a search bar which is centered
          // the type is text
          type="text"
          //adding dark and ligth mode while making its edges round and some style fro the text
          className={
            " px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500 " +
            (isDarkMode ? "text-black" : " text-black")
          }
          //when the input is empty write "Sreach news"
          placeholder="Search news"
          //takes user's input to change the state accordingly
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {filteredNews.length === 0 ? (
        <p className="text-lg text-center">No News Found...</p>
      ) : (
        renderNews()
      )}
    </div>
    //finally checks if the filtered news null or not
    //if its null write "No News Found" else call renderNews function
  );
};

//export the news component
export default News;
