import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/index";
import News from "./pages/News/index";
import AboutUs from "./pages/AboutUs/index";
import FAQ from "./pages/FAQ/index";
import "./index.css";
import "./animations.css";

function App() {
  /**
   * App is the root component of the application.
   *
   * It wraps the Router from react-router-dom with a ThemeProvider from ThemeContext.
   * This ensures that all child components have access to the theme state.
   *
   * It also applies some styles to the root div to ensure the app takes up the full height of the viewport.
   *
   * The Header component is rendered first, followed by the content of the app.
   * The content is wrapped in a div with flex-grow so that it takes up the full remaining space.
   *
   * The Routes component from react-router-dom is used to render the appropriate component based on the URL.
   */

  /**
   * Routes:
   *   - "/" renders the Home component
   *   - "/Dashboard" renders the Dashboard component
   *   - "/News" renders the News component
   *   - "/AboutUs" renders the AboutUs component
   */

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
              <Route path="/FAQ" element={<FAQ />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
