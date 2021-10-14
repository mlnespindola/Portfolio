import React from "react";
import { Sliderdata } from "../slider/Sliderdata";
import "./projectsDescription.scss";

export default function ProjectsDescription({ current }) {
  let item = Sliderdata[current];

  return (
    <div className="project-description">
      <p>{item.description}</p>
      <div className='button-projetos'>
        <a className="código" href={item.link} target="_blank" rel="noreferrer">
          código
        </a>
      </div>
    </div>
  );
}
