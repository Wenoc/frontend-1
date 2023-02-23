import { useEffect, useState } from "react";
import "../styles/Section2.css";

function Section2() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowPopup(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("seenPopup");
    if (!hasSeenPopup) {
      setShowPopup(true);
      localStorage.setItem("seenPopup", "true");
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  return (
    <div className="section2Container">
      {showPopup && (
        <div className="popup">
          <h1>Popup</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
            temporibus?
          </p>
          <button onClick={() => setShowPopup(false)}>Bezaras</button>
        </div>
      )}
      <div className="section2">
        <div className="left">
          <p className="title">Buchen Sie den Grillkurs jetzt</p>
          <ul>
            <li>professioneller Lehrer</li>
            <li>ausgezeichneter Metzger</li>
            <li>1 Tag</li>
            <li>lernen Sie die Kunst des Grillens</li>
          </ul>
          <button>Grillkurs</button>
        </div>
        <div className="imgPlace">
          <div className="img"></div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
