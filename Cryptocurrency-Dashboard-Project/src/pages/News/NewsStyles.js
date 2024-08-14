export const NewsStyles = (isDarkMode) => ({
  // Container for the entire news section
  containerClass: `min-h-screen px-4 py-8 ${
    isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
  }`,
  // Title styling for the news section
  titleClass: "text-3xl font-semibold mb-4 text-center",
  // Search bar styling
  searchBarClass: `px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500 ${
    isDarkMode ? "text-black" : "text-black"
  }`,
  // Styling for each news article container
  articleContainerClass: `max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4 relative ${
    isDarkMode ? "bg-gray-800" : "bg-white"
  }`,
  // Styling for the content of each news article
  articleContentClass: `relative p-8 rounded-xl ${
    isDarkMode
      ? "bg-gray-900 text-white"
      : "bg-gray-200 bg-opacity-300 text-black"
  } bg-opacity-75`,
  // Source of the news article
  sourceClass: `uppercase tracking-wide text-sm font-semibold ${
    isDarkMode ? "text-indigo-400" : "text-indigo-500"
  }`,
  // Title link styling for the news article
  titleLinkClass:
    "block mt-1 text-lg leading-tight font-semibold hover:underline",
  // Author of the news article
  authorClass: `mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`,
});
