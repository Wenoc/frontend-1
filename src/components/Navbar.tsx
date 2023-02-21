import React from "react";
import clock from "../assets/clock.svg";
import logo from "../assets/logo.png";
import pdf from "../assets/pdf.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navContainer">
      <div className="nav">
        <div className="logoPlace">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <a href="#">Die Metzgerei</a>
        <a href="#">Dry Aged</a>
        <a href="#">Fleischversand</a>
        <a href="#">Evenets/Kurse</a>
        <a href="#">Partyservice</a>
        <a href="#">Tagesessen</a>
        <a href="#">Impressum</a>
        <a href="#">Kontant</a>
        <div className="downloadLink">
          <img src={pdf} alt="" />
          <a href="#">download</a>
        </div>
      </div>
      <div className="opentimeContainer">
        <div className="opentime">
          <img src={clock} alt="" />
          <span className="bold">Opentime:</span>
          <span>
            Di. - Fr.: 07:00-13:00 und 15:00-18:30. Sa.: 07:30 - 12:30
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
