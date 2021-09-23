import React from 'react';
import './sideBar.scss';

export default function SideBar({setMenuOpen}) {
    return (
        <ul onClick={()=>setMenuOpen(false)}>
          <li>
            <a href="#intro">Home</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#works">Experiência</a>
          </li>
          <li>
            <a href="#testimonials">Feedback</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
    );
}
