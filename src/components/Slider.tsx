import React, { useEffect, useState } from "react";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";

import s1 from "../assets/slider/s1.jpg";
import s2 from "../assets/slider/s2.avif";
import s3 from "../assets/slider/s3.avif";
import s4 from "../assets/slider/s4.avif";
import s5 from "../assets/slider/s5.jpg";

import "../styles/Slider.css";

function Slider() {
  const [backgroundImage, setBackgroundImage] = useState(s1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageUrls = [s1, s2, s3, s4, s5];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentImageIndex = imageUrls.indexOf(backgroundImage);
      const nextImageIndex = (currentImageIndex + 1) % imageUrls.length;
      setBackgroundImage(imageUrls[nextImageIndex]);
      setCurrentImageIndex(nextImageIndex);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [backgroundImage]);

  const handleArrowClick = (direction: number) => {
    const currentImageIndex = imageUrls.indexOf(backgroundImage);
    let nextImageIndex = currentImageIndex + direction;

    if (nextImageIndex < 0) {
      nextImageIndex = imageUrls.length - 1;
    } else if (nextImageIndex >= imageUrls.length) {
      nextImageIndex = 0;
    }

    setBackgroundImage(imageUrls[nextImageIndex]);
    setCurrentImageIndex(nextImageIndex);
  };

  return (
    <div className="sliderContainer">
      <div
        className="slider"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
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
            <img src={arrowLeft} alt="" onClick={() => handleArrowClick(-1)} />
            {imageUrls.map((imageUrl, index) => (
              <div
                key={imageUrl}
                className={`sliderBtn ${
                  index === currentImageIndex ? "sliderBtnActive" : ""
                }`}
              />
            ))}
            <img src={arrowRight} alt="" onClick={() => handleArrowClick(1)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
