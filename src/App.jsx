import './App.scss';
import {useState} from 'react';
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Movies from "./components/movies/Movies";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Movies/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
