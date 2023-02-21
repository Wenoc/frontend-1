import React from "react";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import slider1 from "../assets/slider1.jpg";
import "../styles/Slider.css";

function Slider() {
  return (
    <div className="sliderContainer">
      <div className="slider">
        <div className="sliderText">
          <p className="sliderTitle">Heiko Brath Metzgermeister</p>
          <p className="sliderContent">
            Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit
            argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam
            Aperol Spritz probatus pertinax.
          </p>
        </div>
        <div className="sliderButtonsContainer">
          <div className="sliderButtons">
            <img src={arrowLeft} alt="" />
            <div className="sliderBtnActive"></div>
            <div className="sliderBtn"></div>
            <div className="sliderBtn"></div>
            <div className="sliderBtn"></div>
            <div className="sliderBtn"></div>
            <div className="sliderBtn"></div>
            <img src={arrowRight} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
