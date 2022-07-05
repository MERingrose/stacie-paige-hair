import React, { useState, useRef } from "react";
import Card from "./Card";
import Anchor from "./Anchor";



function App() {

const [className, setState] = useState("container");
const [isOpen, setOpen] = useState(false);
const [sideMenu, toggleMenu] = useState("side-menu");

function menu(){
  setOpen(!isOpen);
  isOpen ? setState("container change") : setState("container");
  isOpen ? toggleMenu("side-menu menu-open") : toggleMenu("side-menu");
}
    return (
      <div>
      <div className="App">
        <header className="App-header">
        <h1>Stacie Paige Hair</h1>

        {/* <img src="./images/logo.jpg" alt="Stacie Paige Hair Logo"></img> */}
        {/* <button className="button" text="Appointments" type="button" onClick={buttonClicked}>Appointments</button> */}
        {/* <a href="https://www.vagaro.com/weekly-trimtrue/book-now" className="fixedbutton">Bookings</a> */}
        <div className={className} onClick={menu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div id="side-menu" className={sideMenu}>
          <Anchor link="gallery.html" text="Gallery" />
        </div>
        </header>
      </div>
      <div>
      <section id="section01" class="arrow">
          <a href="#section02"><span></span></a>
        </section>
      <video autoPlay muted loop id="myVideo">
        <source src="./videos/background-babes.mp4" type="video/mp4" />
        Your Browser Does Not Support HTML5 video.
      </video>

      </div>
      <div id="section02">
        <Card src="./images/Brunette.jpg" alt="A brunette smiling" />
        <Card src="./images/Blonde.jpg" alt="A blonde smiling" />
        <Card src="./images/Balayage.jpg" alt="An example of balayage" />
      </div>
      <div id="section03">
        <h1>Contact</h1>
        <h2>Weekly Whyte Ave: <a href="tel: +18255125631">(825)512-5631</a></h2>
        <Anchor link="https://www.vagaro.com/us02/weekly-trimtrue" text="Booking" />
      </div>
      </div>
    );
  }

  

  
  export default App;
  