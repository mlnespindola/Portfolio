import "./intro.scss";

export default function Intro() {
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
          <h3>freelancer</h3>
          <a href="#portfolio">
              <img src="imgs/down.png" alt="seta" />
          </a>
        </div>
      </div>
    </div>
  );
}
