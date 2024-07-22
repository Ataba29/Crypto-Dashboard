import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-800 to-black text-white p-4 text-center">
      <div className="mb-8 animate-pulse">
        <img src={logo} alt="Logo" className="w-100 h-100" />
      </div>
      <h1 className="text-4xl font-bold mb-4">
        Welcome to the Cryptocurrency Dashboard!
      </h1>
      <p className="mb-8">Your gateway to the crypto world.</p>
      <Link to="/Dashboard">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Home;
