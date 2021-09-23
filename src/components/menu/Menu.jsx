import React from "react";
import "./menu.scss";
import SideBar from '../sideBar/SideBar';

export default function Menu({menuState, setMenuOpen}) {
  return (
    <div className={"menu " + (menuState && "active")}>
        <SideBar setMenuOpen={setMenuOpen}/>
    </div>
  );
}
