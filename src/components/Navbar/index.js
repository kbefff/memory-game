import React from "react";
import "./style.css";

const Navbar = props => (
    <nav>

        <ul className="nav">
            <li className="brand">
                <a href="/">{props.title}</a>
                <p id="rw">{props.rightWrong}</p>
            </li>

            <li className="socres">
                <h4 id="cur-sco">Current Score: {props.score}</h4>

                <h4 id="top-sco">Top Score: {props.topScore}</h4>
            </li>

        </ul>
    </nav>

);

export default Navbar;