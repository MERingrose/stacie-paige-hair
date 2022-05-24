import React from "react";

function Anchor(props){
    return <div>
        <a href={props.link} >{props.text}</a>
    </div>
}

export default Anchor;