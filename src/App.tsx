import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import "./styles/dark-mode.css";
import "./styles/light-mode.css";

import Slider from "./components/Slider";
import "./styles/index.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggleMode() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <button
        style={{ position: "absolute", zIndex: "10" }}
        onClick={toggleMode}
      >
        Switch theme
      </button>
      <Navbar />
      <Slider />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Parallax />
      <Section5 />
      <Footer />
    </div>
  );
}

export default App;
