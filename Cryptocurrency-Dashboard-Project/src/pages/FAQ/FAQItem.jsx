import React, { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { getFAQItemStyles } from "./FAQStyles";

// Functional component for displaying individual FAQ items
const FAQItem = ({ question, answer, isDarkMode, isActive, onClick }) => {
  // State to manage the open/closed state of the FAQ item
  const [isOpen, setIsOpen] = useState(false);

  // Get styles based on the theme mode and whether the item is open
  const styles = getFAQItemStyles(isDarkMode, isOpen);

  // Toggle the FAQ item's open/closed state and trigger the onClick callback
  const toggleFAQ = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <div className={styles.container}>
      <div className={styles.itemContent}>
        {/* FAQ question section, clickable to toggle the answer */}
        <div className={styles.questionContainer} onClick={toggleFAQ}>
          <h3 className={styles.question}>{question}</h3>
          <span className={styles.arrow}>
            {/* SVG arrow indicating expand/collapse */}
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
        {/* FAQ answer section, displayed based on the open state */}
        <div className={styles.answer}>
          <p className={styles.answerText}>{answer}</p>
        </div>
      </div>
      {/* Display pointer icon if the FAQ item is open */}
      {isOpen && (
        <div className={styles.pointer}>
          <FaHandPointRight className={styles.pointerIcon} />
        </div>
      )}
    </div>
  );
};

export default FAQItem;
