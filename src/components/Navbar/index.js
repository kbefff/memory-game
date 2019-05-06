import React from "react";
import "./style.css";

const Navbar = props => (
    <nav>

        <ul className="nav nav-tabs">
            <li className="brand animated lightSpeedIn">
                <a href="/">{props.title}</a>
            </li>

            <li className="nav-item" id="rw">{props.rightWrong}</li>

            <li className="nav-item" id="cur-sco">Current Score: {props.score}</li>

            <li className="nav-item" id="top-sco">Top Score: {props.topScore}</li>
        </ul>
    </nav>

);

export default Navbar;