import React from "react";
import { Sliderdata } from "../slider/Sliderdata";
import "./portfolioItem.scss";

function PortfolioItem(props) {

  return (
    <div>
      <ul className="portfolio-list">
        {Sliderdata.map((sliderdata, index) => (
          <li
            className={props.current === index ? "active" : undefined}
            key={sliderdata.id}
            onClick={() => {
              props.itemClicked(index);
            }}
          >
            {sliderdata.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioItem;
