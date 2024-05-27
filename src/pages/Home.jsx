import React from 'react';
import Card from '../components/Card';
import Anchor from '../components/Anchor';

export default function Home(){
    return <div> 
    <video playsInline autoPlay muted loop id="myVideo">
        <source src="./videos/background-babes.mp4" type="video/mp4" />
        Your Browser Does Not Support HTML5 video.
    </video>   
    
    <div id="section02">
        {/* arrow button */}
         <div id="arrow_div">
            <section id="section01" >
                <a href="#section02"><span></span></a>
            </section>
        </div>
        {/* <h1>Stacie is an Edmonton, Alberta based hair stylist.</h1> */}
    </div>

    <div id="section03">
        <Card src="./images/Brunette.jpg" alt="A brunette smiling" />
        <Card src="./images/Blonde.jpg" alt="A blonde smiling" />
        <Card src="./images/Balayage.jpg" alt="An example of balayage" />
    </div>

    <div id="contact">
        <div id="contact-pane">
            <h1>Contact</h1>
            <h2>Goldie Salon: <a href="tel: +17804887765">(780)488-7765</a></h2>
            <Anchor link="https://www.vagaro.com/goldie1" text="Booking" />
        </div>
    </div>
</div>
}