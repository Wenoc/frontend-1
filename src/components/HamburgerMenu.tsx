import React from "react";
import "../styles/HamburgerMenu.css";

function HamburgerMenu() {
  return (
    <div className="menu">
      <div className="menuItem">
        <a href="#">Die Metzgerei</a>
      </div>
      <div className="menuItem">
        <a href="#">Dry Aged</a>
      </div>
      <div className="menuItem">
        <a href="#">Fleischversand</a>
      </div>
      <div className="menuItem">
        <a href="#">Evenets/Kurse</a>
      </div>
      <div className="menuItem">
        <a href="#">Partyservice</a>
      </div>
      <div className="menuItem">
        <a href="#">Tagesessen</a>
      </div>
      <div className="menuItem">
        <a href="#">Impressum</a>
      </div>
      <div className="menuItem">
        <a href="#">Kontant</a>
      </div>
    </div>
  );
}

export default HamburgerMenu;
