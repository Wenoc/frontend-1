import React from "react";
import logo2 from "../assets/logo2.png";
import "../styles/Section5.css";
import Line from "./Line";

import reviewImg from "../assets/review.png";
import stars from "../assets/stars.svg";

import arrowL from "../assets/arrowLeft.png";
import arrowR from "../assets/arrowRight.png";

import quotes from "../assets/quotes.svg";

import nag1 from "../assets/nagrada/nagrada1.svg";
import nag2 from "../assets/nagrada/nagrada2.svg";
import nag3 from "../assets/nagrada/nagrada3.svg";
import nag4 from "../assets/nagrada/nagrada4.svg";

function Section5() {
  return (
    <div className="section5Container">
      <div className="section5">
        <div className="sec1">
          <div className="left">
            <img src={logo2} alt="" />
          </div>

          <div className="right">
            <p className="text">
              Metzgerei Brath ist Mitglied im Genussnetzwerk
            </p>
            <div className="btn">Gehen zu site</div>
          </div>
        </div>
        <Line />
        <div className="sec2">
          <div className="left">Auszeichnungen</div>
          <div className="images">
            <div className="imgCon">
              <img src={nag1} alt="" />
              <p className="text">Tollit argumentum genau Saepe lobortis</p>
            </div>
            <div className="imgCon">
              <img src={nag2} alt="" />
              <p className="text">Schneewittchen denique</p>
            </div>
            <div className="imgCon">
              <img src={nag3} alt="" />
              <p className="text">Grimms Märchen expetenda</p>
            </div>
            <div className="imgCon">
              <img src={nag4} alt="" />
              <p className="text">Mettwurst mei ullum gloriatur.</p>
            </div>
          </div>
        </div>
        <Line />
        <div className="sec3">
          <p className="subtitle">Empfehlungs</p>
          <p className="title">Was die Leute über uns sagen</p>

          <div className="reviews">
            <div className="side">
              <p className="content">
                Achtung fur atine indoctum complectitur HugoClub Mate mea
                meliore denique nominavi id. Ohrwurm expetenda nam an, his ei
                Reise euismod assentior.
              </p>
              <p className="name">Rene Weinstein</p>
            </div>
            <div className="middleCon">
              <img className="arrowl" src={arrowL} alt="" />
              <div className="middle">
                <img src={reviewImg} alt="" />
                <img className="stars" src={stars} alt="" />
                <p className="content">
                  Wiener Schnitzel amet, consectetur Handtasche elit, sed do
                  eiusmod tempor Stuttgart ut labore et dolore magna Luftballons
                  Ut Turnbeutel nostrud exercitation ullamco.
                </p>
                <p className="name">Halling Tobias</p>
                <img className="quotes" src={quotes} alt="" />
              </div>
              <img className="arrowr" src={arrowR} alt="" />
            </div>
            <div className="side">
              <p className="content">
                Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener
                Schnitzel aute irure dolor in reprehenderit Guten Tag mollit
                anim Stuttgart.
              </p>
              <p className="name">Maria Kartofeln</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
