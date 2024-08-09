import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../ThemeContext";
import { FaHandPointRight } from "react-icons/fa";
import "../index.css"; // Import CSS file

const questions = [
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

// Title colors for the FAQ header
const titleColors = [
  "text-indigo-600",
  "text-red-600",
  "text-green-600",
  "text-yellow-600",
  "text-pink-600",
  "text-purple-600",
];

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types
const FAQItem = ({ question, answer, isDarkMode, isActive, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <div className="relative mb-4 w-full">
      <div
        className={`border-b ${
          isDarkMode ? "border-gray-600" : "border-gray-300"
        } pb-4 w-full transition duration-500 ease-in-out transform ${
          isOpen ? (isDarkMode ? "bg-gray-800" : "bg-white") : ""
        }`}
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleFAQ}
        >
          <h3
            className={`text-2xl font-semibold ${
              isDarkMode ? "text-white" : "text-black"
            } mr-2`}
          >
            {question}
          </h3>
          <span
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            } ${isDarkMode ? "text-white" : "text-black"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div
          className={`faq-answer transition-all duration-700 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-screen opacity-100 open animate-answerSlideIn"
              : "max-h-0 opacity-0"
          }`}
        >
          <p
            className={`text-xl mt-2 p-4 ${
              isDarkMode ? "text-white" : "text-black"
            } transition-opacity duration-700`}
          >
            {answer}
          </p>
        </div>
      </div>
      {isOpen && (
        <div className="absolute left-0 top-0 transform -translate-x-full flex items-center pr-4">
          <FaHandPointRight
            className={`text-3xl animate-color-change hidden sm:block`}
          />{" "}
          {/* Hidden on mobile and color change */}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [colorIndex, setColorIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % titleColors.length);
    }, 2000); // Change color every 2 seconds

    return () => clearInterval(colorInterval);
  }, []);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-blue-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center relative">
        <div
          className={`flex justify-center items-center w-full mb-8 animate-text-horizontal`}
        >
          <h1
            className={`text-8xl font-bold text-center ${titleColors[colorIndex]} main-title`}
          >
            FAQ
          </h1>
        </div>
        <h1 className="mobile-title">FAQ</h1>{" "}
        {/* Added title for mobile devices */}
        <p
          className={`mb-8 text-2xl text-center ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Find answers to common questions about our products and services.
        </p>
        <div
          id="faq-list"
          className={`flex flex-col items-center w-full relative`}
        >
          <div className="w-full max-w-4xl">
            {questions.map((faqItem, index) => (
              <FAQItem
                key={index}
                question={faqItem.question}
                answer={faqItem.answer}
                isDarkMode={isDarkMode}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
