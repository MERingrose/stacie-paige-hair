import React from "react";

function Link(props){
    return <div>
        <a href={props.href}>{props.text}</a>
    </div>
}

export default Link;