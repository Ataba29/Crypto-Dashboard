export const getDashboardStyles = (isDarkMode) => ({
  // Container style that sets the minimum height to cover the screen and adjusts text and background color based on the theme
  container: `min-h-screen ${
    isDarkMode ? "bg-gray-900 text-white" : "bg-blue-50 text-gray-900"
  }`,

  // Style for the main content area, centering items and adding padding
  content:
    "container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center",

  // Style for the header text, including size, weight, margin, and color
  header: "text-3xl font-bold mb-8 text-center text-indigo-600",

  // Style for the selector element, including margin, padding, border, and colors based on the theme
  selector: `mb-8 p-2 border rounded-md ${
    isDarkMode
      ? "bg-gray-800 text-white border-gray-600"
      : "bg-white text-gray-900 border-gray-300"
  } w-full max-w-xs focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`,

  // Style for the price card, including margin, padding, border, and colors based on the theme
  priceCard: `mb-8 p-6 rounded-lg shadow-lg ${
    isDarkMode ? "bg-gray-800" : "bg-white"
  } w-full max-w-md border ${
    isDarkMode ? "border-gray-700" : "border-gray-200"
  }`,

  // Style for the title of the price card
  priceCardTitle: "text-2xl font-semibold mb-4 text-center text-indigo-500",

  // Style for price labels, adjusting text color based on theme
  priceLabel: "text-xl text-gray-600 dark:text-gray-300",

  // Style for price values, adjusting font weight and color based on theme
  priceValue: "text-xl font-bold text-indigo-600 dark:text-indigo-400",

  // Style for change labels, adjusting text color based on theme
  changeLabel: "text-xl text-gray-600 dark:text-gray-300",

  // Function to determine the style for change values based on whether the daily change is positive or negative
  changeValue: (dailyChange) =>
    `text-xl font-bold ${
      parseFloat(dailyChange) >= 0
        ? "text-green-600 dark:text-green-400"
        : "text-red-600 dark:text-red-400"
    }`,

  // Style for the chart container, including width, background color, padding, border radius, and shadow
  chartContainer:
    "w-full max-w-6xl bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg",

  // Style for the chart, adjusting height based on screen size
  chart: "h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]",
});
