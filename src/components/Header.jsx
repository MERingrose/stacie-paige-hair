import React, {useState} from "react";
import { useEffect } from "react";
import Anchor from "./Anchor.jsx";

export default function Header(){

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

   return <header className="header">

    <h1>Stacie Paige Hair</h1>

    <div className={container} onClick={openMenu}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>

    <div id="side-menu" className={sideMenu}>
      <ul className="side-menu-links">
        <li><Anchor link="gallery.html" text="Gallery" /></li>
        <li><Anchor link="#section03" text="Contact" /></li>
        <li><Anchor link="#section03" text="Weddings" /></li>
      </ul>

    </div>
  </header>
}