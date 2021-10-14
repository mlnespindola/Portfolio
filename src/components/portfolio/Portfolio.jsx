import "./portfolio.scss";
import Slider from "../slider/Slider";
import { Sliderdata } from "../slider/Sliderdata";
import { useState } from "react";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";
import ProjectsDescription from "./ProjectsDescription";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  const [current, setCurrent] = useState(0);
  const length = Sliderdata.length;

  const itemClicked = (index) => {
    setCurrent(index);
  };

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
      <div className="portfolioContainer">
        <div className="leftContainer">
          <Slider current={current}></Slider>

          <ArrowBackIosRounded className="slide-back" onClick={prevSlide} />

          <ArrowForwardIosRounded
            className="slide-forward"
            onClick={nextSlide}
          />
        </div>
        <div className="rightContainer">
          <h1>Projetos</h1>
          <PortfolioItem current={current} itemClicked={itemClicked} />
          <ProjectsDescription current={current} />
        </div>
      </div>
    </div>
  );
}
