import { useState, useEffect } from "react";

// Array of FAQ questions and answers
export const questions = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a comprehensive range of services, including real-time and historical data for various cryptocurrencies, the latest industry news, detailed market analysis, portfolio tracking tools, and educational resources to help you make informed investment decisions.",
  },
  {
    question: "Tell me more about your company",
    answer:
      "For detailed information about our company, please visit our **About Us** page.",
  },
  {
    question: "How frequently is the cryptocurrency data updated?",
    answer:
      "Our cryptocurrency data is updated in real-time, ensuring you have access to the latest information and market trends. This helps you stay ahead of the curve in the dynamic world of cryptocurrency trading.",
  },
  {
    question: "Can I access your platform on my mobile device?",
    answer:
      "Yes, our platform is fully responsive and can be accessed seamlessly from any mobile device.",
  },
  {
    question: "What resources do you offer for learning about cryptocurrency?",
    answer:
      "We provide a comprehensive dashboard, interactive charts, and the latest industry news to help you stay up-to-date with the evolving cryptocurrency market and trends.",
  },
  {
    question: "Are there any fees for using your services?",
    answer:
      "No, our platform is completely free and available for everyone to use.",
  },
];

// Array of text color classes for titles
export const titleColors = [
  "text-indigo-600",
  "text-red-600",
  "text-green-600",
  "text-yellow-600",
  "text-pink-600",
  "text-purple-600",
];

// Custom hook for changing title colors periodically
export const useTitleColorChange = () => {
  // State to keep track of the current color index
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    // Set an interval to update the color index every 2 seconds
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % titleColors.length);
    }, 2000); // Change color every 2 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(colorInterval);
  }, []);

  // Return the current color index
  return colorIndex;
};
