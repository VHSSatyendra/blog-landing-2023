import React from "react";
import "./Home.css";
import HamMenu from "../../images/burger-menu.svg";

function Home() {
  return (
    <div className="home-main">
      <nav className="nav-bar">
        <h5 className="logo">AM</h5>
        <ul>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">articles</a>
          </li>
          <li>
            <a href="#" className="btn">
              subscribe
            </a>
          </li>
        </ul>
      </nav>
      <img src={HamMenu} alt="Menu" className="menu" />
      <div className="overlay"></div>
      <h1 className="title">AMBARK</h1>
      <h5 className="sub-title">Eat Well & Grow Well</h5>
      <div className="line1"></div>
    </div>
  );
}

export default Home;
