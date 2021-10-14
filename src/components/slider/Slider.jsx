import React from "react";
import { Sliderdata } from "./Sliderdata";
import "./slider.scss";

const Slider = ({ current }) => {
  return(
    <div className="slider-container">
      {Sliderdata.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide-active" : "slide"}
            key={index}
          >
            {index === current && (
              <img className="slide-image" src={slide.image} alt="projetos" />
            )}
          </div>
        );
          
      })};
    </div>
  )
    
};
export default Slider;