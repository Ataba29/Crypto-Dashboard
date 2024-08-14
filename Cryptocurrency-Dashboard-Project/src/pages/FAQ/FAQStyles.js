// Function to get styles for the FAQ component based on dark mode
export const getFAQStyles = (isDarkMode) => ({
  // Container style for the FAQ section
  container: `min-h-screen ${
    isDarkMode ? "bg-gray-900 text-white" : "bg-blue-50 text-gray-900"
  }`, // Adjusts background and text color based on dark mode

  // Main content container with center alignment
  content:
    "container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center relative",

  // Title container styling with animation for horizontal scrolling text
  titleContainer:
    "flex justify-center items-center w-full mb-8 animate-text-horizontal",

  // Main title styling
  mainTitle: "text-8xl font-bold text-center",

  // Mobile title class (could be used for responsive design)
  mobileTitle: "mobile-title",

  // Description styling with dynamic color based on dark mode
  description: `mb-8 text-2xl text-center ${
    isDarkMode ? "text-white" : "text-black"
  }`,

  // FAQ list container style
  faqList: "flex flex-col items-center w-full relative",

  // Inner FAQ list styling with max-width constraint
  faqListInner: "w-full max-w-4xl",
});

// Function to get styles for each FAQ item based on dark mode and open state
export const getFAQItemStyles = (isDarkMode, isOpen) => ({
  // Container style for each FAQ item
  container: "relative mb-4 w-full",

  // Item content styling with border, padding, and dynamic background color
  itemContent: `border-b ${
    isDarkMode ? "border-gray-600" : "border-gray-300"
  } pb-4 w-full transition duration-500 ease-in-out transform ${
    isOpen ? (isDarkMode ? "bg-gray-800" : "bg-white") : ""
  }`,

  // Container for the question with cursor pointer
  questionContainer: "flex justify-between items-center cursor-pointer",

  // Styling for the question text with dynamic color
  question: `text-2xl font-semibold ${
    isDarkMode ? "text-white" : "text-black"
  } mr-2`,

  // Arrow icon style with rotation animation
  arrow: `transform transition-transform duration-300 ${
    isOpen ? "rotate-180" : ""
  } ${isDarkMode ? "text-white" : "text-black"}`,

  // Styling for the answer section with animation for sliding in and out
  answer: `faq-answer transition-all duration-700 ease-in-out overflow-hidden ${
    isOpen
      ? "max-h-screen opacity-100 open animate-answerSlideIn"
      : "max-h-0 opacity-0"
  }`,

  // Styling for the answer text with transition for opacity
  answerText: `text-xl mt-2 p-4 ${
    isDarkMode ? "text-white" : "text-black"
  } transition-opacity duration-700`,

  // Pointer container styling for icon alignment
  pointer:
    "absolute left-0 top-0 transform -translate-x-full flex items-center pr-4",

  // Icon styling with animation, hidden on smaller screens
  pointerIcon: "text-3xl animate-color-change hidden sm:block",
});
