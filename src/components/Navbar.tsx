import React from "react";
import clock from "../assets/clock.svg";
import logo from "../assets/logo.png";
import pdf from "../assets/pdf.png";
import "../styles/Navbar.css";

import hamburger from "../assets/hamburger.svg";

function Navbar() {
  return (
    <div className="navContainer">
      <div className="nav">
        <div className="logoPlace">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <a href="#" className="navItem">
          Die Metzgerei
        </a>
        <a href="#" className="navItem">
          Dry Aged
        </a>
        <a href="#" className="navItem">
          Fleischversand
        </a>
        <a href="#" className="navItem">
          Evenets/Kurse
        </a>
        <a href="#" className="navItem">
          Partyservice
        </a>
        <a href="#" className="navItem">
          Tagesessen
        </a>
        <a href="#" className="navItem">
          Impressum
        </a>
        <a href="#" className="navItem">
          Kontant
        </a>
        <div className="right">
          <div className="downloadLink">
            <img src={pdf} alt="" />
            <a href="#">download</a>
          </div>

          <div className="hamburger">
            <img src={hamburger} alt="" height={50} width={50} />
          </div>
        </div>
      </div>
      <div className="opentimeContainer">
        <div className="opentime">
          <div className="optime">
            <img src={clock} alt="" />
            <span className="bold">Opentime:</span>
          </div>
          <span>
            Di. - Fr.: 07:00-13:00 und 15:00-18:30. Sa.: 07:30 - 12:30
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
