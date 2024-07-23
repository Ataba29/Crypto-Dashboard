import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import AboutUs from "./pages/AboutUs";
import "./index.css";
import "./animations.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App h-screen overflow-y-auto flex flex-col">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/News" element={<News />} />
              <Route path="/AboutUs" element={<AboutUs />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
