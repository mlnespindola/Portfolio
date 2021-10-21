import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/portfolioMain/Portfolio';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import './app.scss';
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuState={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuState={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
