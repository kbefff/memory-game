import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div
            className="hero text-center"
            style={{
              backgroundImage: `url(${props.backgroundImage})`
            }}>
            {/* this line "props.children" allows anything else passed into the hero image to display */}
            {props.children}

        </div>
    );
}

export default Jumbotron;
