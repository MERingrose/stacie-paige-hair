import React, {useState} from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// import Home from '../pages/Home.jsx';
// import Gallery from '../pages/Gallery.jsx';
// import Weddings from '../pages/Weddings.jsx';



export default function NavBar(){

    const [container, setState] = useState("container");
    const [isOpen, setOpen] = useState(false);
    const [sideMenu, toggleMenu] = useState("side-menu");

    function openMenu(){
        setOpen(!isOpen);
    }

    useEffect(()=>  {
        isOpen ? setState("container change") : setState("container");
        isOpen ? toggleMenu("side-menu menu-open") : toggleMenu("side-menu");
    }, [isOpen]);

return <nav className="header">

    <Link to="/" ><h1>Stacie Paige Hair</h1></Link>

    <div className={container} onClick={openMenu}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>

    <div id="side-menu" className={sideMenu}>
    
      <ul className="side-menu-links">
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/weddings">Weddings</Link></li>
      </ul>
      
      {/* </BrowserRouter> */}
    </div>
  </nav>
}