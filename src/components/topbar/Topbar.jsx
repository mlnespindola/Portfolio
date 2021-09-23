import "./topbar.scss";
import { Person, Email } from "@material-ui/icons";

export default function Topbar({menuState, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuState && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            frontend.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+55 27 99603432</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>espindolamilena@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburguer" onClick={()=>setMenuOpen(!menuState)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
