import React, { useEffect, useState } from "react";
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

import reviews from "../assets/reviews.json";

function Section5() {
  const [reviewList, setReviews] = useState(reviews);

  const moveReview = (direction: number) => {
    const newReviews = [...reviewList];

    if (direction == 1) {
      newReviews[0] = reviewList[1];
      newReviews[1] = reviewList[2];
      newReviews[2] = reviewList[0];
    } else if (direction == -1) {
      newReviews[0] = reviewList[2];
      newReviews[1] = reviewList[0];
      newReviews[2] = reviewList[1];
    }

    setReviews(newReviews);
  };

  useEffect(() => {}, [reviewList]);

  return (
    <div className="section5Container standard-bg">
      <div className="section5">
        <div className="sec1">
          <div className="left">
            <img src={logo2} alt="" />
          </div>

          <div className="right text-color">
            <p className="text">
              Metzgerei Brath ist Mitglied im Genussnetzwerk
            </p>
            <div className="btn">Gehen zu site</div>
          </div>
        </div>
        <Line />
        <div className="sec2">
          <div className="left text-color">Auszeichnungen</div>
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
          <p className="title text-color">Was die Leute über uns sagen</p>

          <div className="reviews">
            <div className="side reviewCardSide">
              <p className="content text-color">{reviewList[0].review}</p>
              <p className="name text-color">{reviewList[0].name}</p>
            </div>
            <div className="middleCon">
              <img
                className="arrowl"
                onClick={() => moveReview(-1)}
                src={arrowL}
                alt=""
              />
              <div className="middle reviewCard">
                <img src={reviewImg} alt="" />
                <img className="stars" src={stars} alt="" />
                <p className="content text-color">{reviewList[1].review}</p>
                <p className="name text-color">{reviewList[1].name}</p>
                <img className="quotes" src={quotes} alt="" />
              </div>
              <img
                className="arrowr"
                onClick={() => moveReview(1)}
                src={arrowR}
                alt=""
              />
            </div>
            <div className="side reviewCardSide">
              <p className="content text-color">{reviewList[2].review}</p>
              <p className="name text-color">{reviewList[2].name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
