import React from "react";
import "../styles/Section2.css";

function Section2() {
  return (
    <div className="section2Container">
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
