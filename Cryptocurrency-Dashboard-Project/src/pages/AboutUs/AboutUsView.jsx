import React from "react";
import {
  FaBitcoin,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaRegLightbulb,
} from "react-icons/fa";
import { getAboutUsStyles } from "./AboutUsStyles";
import { teamMembers, features, values, mapEmbedUrl } from "./AboutUsLogic";

// Functional component that represents the About Us page view
const AboutUsView = ({ isDarkMode }) => {
  // Get styles based on the theme mode
  const styles = getAboutUsStyles(isDarkMode);

  return (
    <div className={styles.container}>
      <div className={styles.backgroundOverlay}></div>

      <div className={styles.contentContainer}>
        {/* Introduction Section */}
        <div className="text-center space-y-6">
          <h1 className={styles.sectionTitle}>About Us</h1>
          <p className={styles.sectionSubtitle}>
            Navigating the future of cryptocurrency with cutting-edge insights.
          </p>
          <p className={styles.sectionDescription}>
            Transforming data into actionable knowledge.
          </p>
        </div>

        {/* Mission, Vision, and Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Mission Card */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaRocket className="mr-3" /> Our Mission
            </h2>
            <p className="text-lg">
              We aim to democratize access to cryptocurrency data, offering an
              intuitive platform that delivers real-time insights and
              comprehensive analysis. Our mission is to empower every individual
              with the tools they need to succeed in the digital currency
              landscape.
            </p>
          </div>

          {/* Vision Card */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaChartLine className="mr-3" /> Our Vision
            </h2>
            <p className="text-lg">
              Our vision is to become the leading platform for cryptocurrency
              analysis, known for our accuracy, innovation, and user-centric
              design. We envision a world where everyone can navigate the
              complexities of digital finance with confidence and clarity.
            </p>
          </div>

          {/* Values Card */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaRegLightbulb className="mr-3" /> Our Values
            </h2>
            <ul className="list-disc list-inside ml-6 text-lg space-y-3">
              {values.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Our Story Section */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaUsers className="mr-3" /> Our Story
          </h2>
          <p className="text-lg">
            Our journey began as a project for a group of passionate students
            eager to bridge the gap between technology and finance. United by a
            common goal, we set out to create a platform that not only tracks
            cryptocurrency trends but also empowers users with the knowledge
            they need to make informed decisions.
          </p>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamMemberCard}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-32 object-cover rounded-full mx-auto mb-2"
                />
                <p className="text-xl font-semibold">{member.name}</p>
              </div>
            ))}
          </div>

          <p className="text-lg mt-4">
            Through innovation and collaboration, we've created a product that
            resonates with both novice and expert users. We continue to push the
            boundaries of what's possible in cryptocurrency analysis and
            visualization.
          </p>
        </div>

        {/* Features Section */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaBitcoin className="mr-3" /> Features
          </h2>
          <ul className="list-disc list-inside ml-6 text-lg space-y-3">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Map Section */}
        <div className={styles.mapContainer}>
          <h2 className={styles.mapTitle}>Our Location</h2>
          <div className={styles.mapFrame}>
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsView;
