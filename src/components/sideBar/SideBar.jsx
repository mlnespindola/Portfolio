import React from 'react';
import './sideBar.scss';

export default function SideBar({setMenuOpen}) {
    return (
        <ul className='sidebar-ul'onClick={()=>setMenuOpen(false)}>
          <li>
            <a href="#intro">Home</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
    );
}
