import * as React from "react";
import Button from "./Button";

function App() {
    return (
      <div>
      <div className="App">
        <header className="App-header">
        <h1>Stacie Paige Hair.</h1>
        <img src="./images/logo.jpg" alt="Stacie Paige Hair Logo"></img>
        <Button text="Book Now" />
        </header>
      </div>
      <div>
      <video autoplay muted loop id="myVideo">
        <source src="./videos/background-babes.mp4" type="video/mp4" />
        Your Browser Does Not Support HTML5 video.
      </video>
      </div>
      </div>
    );
  }
  
  export default App;
  