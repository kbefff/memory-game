import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
  return (

  //   <nav>
  //   <ul>
  //     <li className="brand animated lightSpeedIn">
  //       <a href="/simpsons-react-clicky/">{props.title}</a>
  //     </li>

  //     <li id="rw">{props.rightWrong}</li>

  //     <li id="cur-sco">Current Score: {props.score}</li>

  //     <li id="top-sco">Top Score: {props.topScore}</li>
  //   </ul>
  // </nav>


    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Pupster
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"} >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/discover" className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"} >
          Discover
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"} >
          Search
        </Link>
      </li>
    </ul>
  );
}
export default Navbar;