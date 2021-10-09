import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        strings: ["Developer"],
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
      });
    }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="imgs/man.png" alt="Milena Espíndola"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Olá, eu sou a</h2>
          <h1>Milena Espíndola</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
          <a href="#portfolio">
              <img src="imgs/down.png" alt="seta" />
          </a>
        </div>
      </div>
    </div>
  );
}
