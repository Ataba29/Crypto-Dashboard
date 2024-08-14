import React, { useState } from "react";
import FAQItem from "./FAQItem";
import { getFAQStyles } from "./FAQStyles";
import { questions, titleColors, useTitleColorChange } from "./FAQLogic";

const FAQView = ({ isDarkMode }) => {
  const styles = getFAQStyles(isDarkMode); // Get styles based on dark mode
  const colorIndex = useTitleColorChange(); // Get current color index for title
  const [activeIndex, setActiveIndex] = useState(null); // Track active FAQ item

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Title section with color change animation */}
        <div className={styles.titleContainer}>
          <h1 className={`${styles.mainTitle} ${titleColors[colorIndex]}`}>
            FAQ
          </h1>
        </div>
        <h1 className={styles.mobileTitle}>FAQ</h1>
        <p className={styles.description}>
          Find answers to common questions about our products and services.
        </p>
        {/* FAQ list section */}
        <div id="faq-list" className={styles.faqList}>
          <div className={styles.faqListInner}>
            {/* Render FAQ items */}
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

export default FAQView;
