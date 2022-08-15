import React from "react";

//TODO: pop out when clicked functionality

function Card(props){
    return <div className="card-container">
        <img src={props.src} alt={props.alt} className="card-image" />
    </div>
}

export default Card;