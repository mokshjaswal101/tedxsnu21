import React, { useState } from "react";

import "./Navbar.scss";

import Logo from "../../assets/images/tedx_snu_logo_black.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="navbar-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div
          className={clicked ? "navbar-menu navbar-menu-mobile" : "navbar-menu"}
        >
          <ul>
            <li>The Conference</li>
            <li>Presenters</li>
            <li>Partners</li>
            <li>Past Conference</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li id="navbar-tickets">Qissa</li>
          </ul>
        </div>

        <button
          className="navbar-mobile"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <div
            className={
              clicked ? "navbar-hamburger navbar-cross" : "navbar-hamburger"
            }
          ></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
