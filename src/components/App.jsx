import * as React from "react";
// import Button from "./Button";
import Card from "./Card";

// function buttonClicked(){
//   window.open('https://www.vagaro.com/weekly-trimtrue/book-now');
// }
var className = "container ";




function App() {
    return (
      <div>
      <div className="App">
        <header className="App-header">
        <h1>Stacie Paige Hair</h1>
        {/* <img src="./images/logo.jpg" alt="Stacie Paige Hair Logo"></img> */}
        {/* <button className="button" text="Appointments" type="button" onClick={buttonClicked}>Appointments</button> */}
        <a href="https://www.vagaro.com/weekly-trimtrue/book-now" className="fixedbutton">Bookings</a>
        <div className={className} onClick={menu(this)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        </header>
      </div>
      <div>
      <video autoPlay muted loop id="myVideo">
        <source src="./videos/background-babes.mp4" type="video/mp4" />
        Your Browser Does Not Support HTML5 video.
      </video>
      </div>
      <div>
        <Card src="./images/Brunette.jpg" alt="A brunette smiling" />
        <Card src="./images/Blonde.jpg" alt="A blonde smiling" />
        <Card src="./images/Balayage.jpg" alt="An example of balayage" />
      </div>
      </div>
    );
  }

  
function menu(element){
  var isOpen = true;
  className = "container " + (isOpen ? "change" : null);
}
  
  export default App;
  