import React from 'react';


export default function Contact(){
    let myStyle = {
        fontSize: "30px",
        color: "yellow",
        marginTop: "150px",
        left: "200px",

    };

    return (<div style={{marginLeft: "50px", padding: "20px"}}>
                <h1 style={myStyle}>Contact</h1>
                <h2 style={{color: "yellow"}}>For appointments: <a style={{color: "black", textShadow: " 0 0 6px yellow", textDecoration: "none"
                }} href='http://www.vagaro.com/goldie1'>Goldie Salon</a></h2>
                <h2 style={{color: "yellow"}}>Phone: <a style={{color: "black", textShadow: " 0 0 6px yellow", textDecoration: "none"}} href='tel:+17804887765'>(780)488-7765</a></h2>

    </div>
    );
}