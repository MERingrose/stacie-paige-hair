import * as React from "react";
// import Button from "./Button";
import Card from "./Card";

function buttonClicked(){
  window.open('https://www.vagaro.com/weekly-trimtrue/book-now');
}

function App() {
    return (
      <div>
      <div className="App">
        <header className="App-header">
        <h1>Stacie Paige Hair.</h1>
        {/* <img src="./images/logo.jpg" alt="Stacie Paige Hair Logo"></img> */}
        <button className="button" text="Appointments" type="button" onClick={buttonClicked}>Appointments</button>
        </header>
      </div>
      <div>
      <video autoPlay muted loop id="myVideo">
        <source src="./videos/background-babes.mp4" type="video/mp4" />
        Your Browser Does Not Support HTML5 video.
      </video>
      </div>
      <div>
      <Card src="./images/logo.jpg" alt="This is a picture" />
      <Card src="./images/logo.jpg" alt="This is a picture" />
      <Card src="./images/logo.jpg" alt="This is a picture" />
      </div>
      </div>
    );
  }
  
  export default App;
  