import React, { useState } from "react";
import Card from "./Card";
import Anchor from "./Anchor";



function App() {

const [container, setState] = useState("container");
const [isOpen, setOpen] = useState(false);
const [sideMenu, toggleMenu] = useState("side-menu");

function menu(){
  setOpen(!isOpen);
  isOpen ? setState("container change") : setState("container");
  isOpen ? toggleMenu("side-menu menu-open") : toggleMenu("side-menu");
}
    return (
      <div>
          <video playsInline autoPlay muted loop id="myVideo">
            <source src="./videos/background-babes.mp4" type="video/mp4" />
            Your Browser Does Not Support HTML5 video.
          </video>

        <div className="App">
          <header className="header">
            
            <h1>Stacie Paige Hair</h1>

            <div className={container} onClick={menu}>
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



        </div>

        <div>
          <section id="section01" className="arrow">
            <a href="#section02"><span></span></a>
          </section>

        </div>

        <div id="section02">
          <h1>Stacie is an Edmonton, Alberta based hair stylist.</h1>
        </div>

        <div id="section03">
          <Card src="./images/Brunette.jpg" alt="A brunette smiling" />
          <Card src="./images/Blonde.jpg" alt="A blonde smiling" />
          <Card src="./images/Balayage.jpg" alt="An example of balayage" />
        </div>

        <div id="contact">
          <div id="contact-pane">
          <h1>Contact</h1>
          <h2>Weekly Whyte Ave: <a href="tel: +18255125631">(825)512-5631</a></h2>
          <Anchor link="https://www.vagaro.com/us02/weekly-trimtrue" text="Booking" />
          </div>
        </div>
      </div>
    );
  }

  

  
  export default App;
  