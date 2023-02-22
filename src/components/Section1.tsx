import React from "react";
import mainImg from "../assets/section1/mainImg.png";
import otherImg1 from "../assets/section1/otherImg1.png";
import otherImg2 from "../assets/section1/otherImg2.png";
import otherImg3 from "../assets/section1/otherImg3.png";
import "../styles/Section1.css";

function Section1() {
  return (
    <div className="section1Container">
      <div className="section1">
        <div className="left">
          <p className="title">Dry aged</p>
          <p className="subtitle">Alte Wutz, Dry Aged</p>

          <p className="content">
            Halt amet, consectetur Handtasche elit, sed do eiusmod tempor
            Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim
            veniam, Turnbeutel nostrud exercitation ullamco laboris nisi
            Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener
            Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim
            Stuttgart.
            <span>
              id latine indoctum complectitur HugoClub Mate mea meliore denique
              nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod
              assentior.
            </span>
          </p>

          <div className="buttons">
            <div className="btn">Dry aged</div>
            <div className="btn">Alte Wurtz</div>
          </div>
        </div>
        <div className="right">
          <img src={mainImg} alt="main img" />
          <div className="otherImgs">
            <img src={otherImg1} alt="" />
            <img src={otherImg2} alt="" />
            <img src={otherImg3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
