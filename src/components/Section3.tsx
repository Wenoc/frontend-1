import React from "react";
import logo from "../assets/logo.png";
import line from "../assets/Section3/line.png";

import img1 from "../assets/Section3/1.png";
import img2 from "../assets/Section3/2.png";
import img3 from "../assets/Section3/3.png";
import img4 from "../assets/Section3/4.png";
import "../styles/Section3.css";

function Section3() {
  return (
    <div className="section3Container">
      <div className="section3">
        <p className="title">Das Handwerk</p>
        <p className="subtitle">alles über unsere Hausgemachte Produkte</p>

        <p className="content">
          Halt amet, consectetur Handtasche elit, sed do eiusmod tempor
          Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim
          veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen
          Sie deutsch aliquip ex ea commodo consequat.
        </p>
        <p>&nbsp;</p>
        <p className="content">
          Wiener Schnitzel aute irure dolor in Guten Tag mollit anim Stuttgart.
        </p>
        <p>&nbsp;</p>
        <p className="content">
          id latine indoctum complectitur HugoClub Mate mea meliore denique
          nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior
        </p>

        <div className="btn">Das Handwerk</div>
        <div className="line">
          <img src={line} alt="" />
          <img src={logo} height={70} width={70} alt="" />
          <img src={line} alt="" />
        </div>
        <div className="images">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section3;
