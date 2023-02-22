import React from "react";
import logo from "../assets/logo.png";
import line from "../assets/Section3/line.png";
import "../styles/Line.css";

function Line() {
  return (
    <div className="line">
      <img src={line} alt="" />
      <img src={logo} height={70} width={70} alt="" />
      <img src={line} alt="" />
    </div>
  );
}

export default Line;
