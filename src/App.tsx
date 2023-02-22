import Navbar from "./components/Navbar";
import Parallax from "./components/parallax";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

import Slider from "./components/Slider";
import "./styles/index.css";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Parallax />
    </>
  );
}

export default App;
