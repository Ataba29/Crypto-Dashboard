import React, { useContext } from "react";
import {
  FaBitcoin,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaRegLightbulb,
} from "react-icons/fa";
import { ThemeContext } from "../ThemeContext";
import khalel from "../../public/khalel.png";
import ahmad from "../../public/ahmad.png";
import basel from "../../public/basel.png";
import ibraheem from "../../public/ibraheem.png";

const AboutUs = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`relative bg-cover bg-center py-20 px-4 sm:px-6 lg:px-8 ${
        isDarkMode ? "text-white" : "text-gray-900"
      }`}
    >
      <div
        className={`absolute inset-0 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-blue-50 text-gray-900"
        }`}
      ></div>

      <div className="relative max-w-6xl mx-auto space-y-20">
        {/* Introduction Section */}
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-gradient">
            About Us
          </h1>
          <p className="text-xl font-light">
            Navigating the future of cryptocurrency with cutting-edge insights.
          </p>
          <p className="text-md font-semibold tracking-widest">
            Transforming data into actionable knowledge.
          </p>
        </div>

        {/* Mission, Vision, and Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Mission Card */}
          <div
            className={`p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2
              className={`text-4xl font-bold mb-6 flex items-center ${
                isDarkMode ? "text-blue-300" : "text-blue-500"
              }`}
            >
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
          <div
            className={`p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2
              className={`text-4xl font-bold mb-6 flex items-center ${
                isDarkMode ? "text-blue-300" : "text-blue-500"
              }`}
            >
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
          <div
            className={`p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2
              className={`text-4xl font-bold mb-6 flex items-center ${
                isDarkMode ? "text-blue-300" : "text-blue-500"
              }`}
            >
              <FaRegLightbulb className="mr-3" /> Our Values
            </h2>
            <ul className="list-disc list-inside ml-6 text-lg space-y-3">
              <li>
                Transparency: We believe in open and honest communication.
              </li>
              <li>
                Innovation: We constantly explore new ideas and technologies.
              </li>
              <li>Integrity: We uphold the highest ethical standards.</li>
              <li>
                User Focus: We prioritize the needs of our users above all.
              </li>
            </ul>
          </div>
        </div>

        {/* Our Story Section */}
        <div
          className={`p-10 rounded-lg shadow-2xl space-y-6 transform transition duration-500 hover:scale-105 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-4xl font-bold mb-6 flex items-center ${
              isDarkMode ? "text-blue-300" : "text-blue-500"
            }`}
          >
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Team Member - Khalel */}
            <div
              className={`p-4 rounded-lg text-center transform transition duration-300 hover:scale-105 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <img
                src={khalel}
                alt="Khalel Mnsor"
                className="w-full h-32 object-cover rounded-full mx-auto mb-2"
              />
              <p className="text-xl font-semibold">Khalel Mnsor</p>
            </div>

            {/* Team Member - Ahmad */}
            <div
              className={`p-4 rounded-lg text-center transform transition duration-300 hover:scale-105 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <img
                src={ahmad}
                alt="Ahmad Ataba"
                className="w-full h-32 object-cover rounded-full mx-auto mb-2"
              />
              <p className="text-xl font-semibold">Ahmad Ataba</p>
            </div>

            {/* Team Member - Basel */}
            <div
              className={`p-4 rounded-lg text-center transform transition duration-300 hover:scale-105 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <img
                src={basel}
                alt="Basel Hadad"
                className="w-full h-32 object-cover rounded-full mx-auto mb-2"
              />
              <p className="text-xl font-semibold">Basel Hadad</p>
            </div>

            {/* Team Member - Ibraheem */}
            <div
              className={`p-4 rounded-lg text-center transform transition duration-300 hover:scale-105 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <img
                src={ibraheem}
                alt="Ibraheem Jramneh"
                className="w-full h-32 object-cover rounded-full mx-auto mb-2"
              />
              <p className="text-xl font-semibold">Ibraheem Jramneh</p>
            </div>
          </div>

          <p className="text-lg mt-4">
            Through innovation and collaboration, we've created a product that
            resonates with both novice and expert users. We continue to push the
            boundaries of what's possible in cryptocurrency analysis and
            visualization.
          </p>
        </div>

        {/* Features Section */}
        <div
          className={`p-10 rounded-lg shadow-2xl space-y-6 transform transition duration-500 hover:scale-105 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-4xl font-bold mb-6 flex items-center ${
              isDarkMode ? "text-blue-300" : "text-blue-500"
            }`}
          >
            <FaBitcoin className="mr-3" /> Features
          </h2>
          <ul className="list-disc list-inside ml-6 text-lg space-y-3">
            <li>Real-time data tracking with interactive charts and graphs</li>
            <li>Comprehensive market analysis and price tracking</li>
            <li>Detailed cryptocurrency profiles with live updates</li>
            <li>Stay tuned for exciting cryptocurrency news and updates!</li>
          </ul>
        </div>

        {/* Map Section */}
        <div
          className={`relative overflow-hidden pt-10 pb-10 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            Our Location
          </h2>
          <div
            className={`relative w-full h-96 rounded-lg overflow-hidden shadow-2xl ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.638404032615!2d35.28500472035494!3d32.76763939886074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c33e41201da93%3A0xee7b4a64461d4ece!2z15TXnteb15zXnNeUINeU15jXm9eg15XXnNeV15LXmdeqINec15TXoNeT16HXkNeZ150g15DXldeo15gg15HXqNeQ15XXk9eUINeb16jXnteZ15DXnA!5e0!3m2!1sar!2sil!4v1723062984559!5m2!1sar!2sil"
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

export default AboutUs;
