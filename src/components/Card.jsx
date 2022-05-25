import React from "react";

function Card(props){
    return <div className="card-container">
        <img src={props.src} alt={props.alt} className="card-image" />
    </div>
}

export default Card;