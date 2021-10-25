import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

import Logo from "../../assets/images/tedx_snu_logo_black.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const check = () => {
    if (document.querySelector(".navbar-mobile"))
      document
        .querySelector(".navbar-menu")
        .classList.remove("navbar-menu-mobile");

    if (document.querySelector(".navbar-cross"))
      document.querySelector(".navbar-cross").classList.remove("navbar-cross");
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div
          className={clicked ? "navbar-menu navbar-menu-mobile" : "navbar-menu"}
        >
          <ul>
            <a href="/#about" onClick={check}>
              <li>The Conference</li>
            </a>
            {/* <Link to="">
              <li>Presenters</li>
            </Link> */}
            {/* <Link>
              <li>Partners</li>
            </Link> */}
            {/* <Link>
              <li>Past Conference</li>
            </Link> */}
            <a href="/#faq" onClick={check}>
              <li>FAQ</li>
            </a>
            <a href="/#contact" onClick={check}>
              <li>Contact</li>
            </a>
            <Link to="/qissa" onClick={check}>
              <li id="navbar-tickets">Qissa</li>
            </Link>
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
