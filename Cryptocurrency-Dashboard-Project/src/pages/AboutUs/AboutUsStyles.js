// Function that returns styles based on the theme mode (dark or light)
export const getAboutUsStyles = (isDarkMode) => ({
  // Container style with conditional text color based on the theme
  container: `relative bg-cover bg-center py-20 px-4 sm:px-6 lg:px-8 ${
    isDarkMode ? "text-white" : "text-gray-900"
  }`,

  // Background overlay style with conditional background and text color
  backgroundOverlay: `absolute inset-0 ${
    isDarkMode ? "bg-gray-900 text-white" : "bg-blue-50 text-gray-900"
  }`,

  // Style for the main content container
  contentContainer: "relative max-w-6xl mx-auto space-y-20",

  // Section title style with gradient text and animation
  sectionTitle:
    "text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-gradient",

  // Section subtitle style
  sectionSubtitle: "text-xl font-light",

  // Section description style with tracking
  sectionDescription: "text-md font-semibold tracking-widest",

  // Card style with conditional background color and hover effect
  card: `p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 ${
    isDarkMode ? "bg-gray-800" : "bg-white"
  }`,

  // Card title style with conditional text color
  cardTitle: `text-4xl font-bold mb-6 flex items-center ${
    isDarkMode ? "text-blue-300" : "text-blue-500"
  }`,

  // Team member card style with conditional background color and hover effect
  teamMemberCard: `p-4 rounded-lg text-center transform transition duration-300 hover:scale-105 ${
    isDarkMode ? "bg-gray-800" : "bg-white"
  }`,

  // Map container style with conditional background color
  mapContainer: `relative overflow-hidden pt-10 pb-10 ${
    isDarkMode ? "bg-gray-800" : "bg-white"
  }`,

  // Map title style with gradient text
  mapTitle:
    "text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500",

  // Map frame style with conditional background color
  mapFrame: `relative w-full h-96 rounded-lg overflow-hidden shadow-2xl ${
    isDarkMode ? "bg-gray-800" : "bg-white"
  }`,
});
