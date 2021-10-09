import "./portfolio.scss";
import Slider from "../slider/Slider";
import { Sliderdata } from "../slider/Sliderdata";
import { useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

export default function Portfolio() {
  const [current, setCurrent] = useState(0);
  const length = Sliderdata.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(Sliderdata) || Sliderdata.length <= 0) {
    return null;
  }

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {Sliderdata.map((sliderdata, index) => (
          <li className={ current === index && 'active'} key={sliderdata.id}>{sliderdata.name}</li>
        ))}
      </ul>
      <ArrowBackIos className="slide-back" onClick={prevSlide} />
      <ArrowForwardIos className="slide-forward" onClick={nextSlide} />
      <Slider current={current}></Slider>
    </div>
  );
}
