import React from "react";

import "./Navbar.scss";

import Logo from "../../assets/images/tedx_snu_logo_black.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbar-menu">
        <ul>
          <li>About</li>
          <li>Presenters</li>
          <li>Partners</li>
          <li>Past Conferences</li>
        </ul>
      </div>
      <div className="get-tickets">
        <button className="btn btn-primary">Get Tickets</button>
      </div>
    </div>
  );
};

export default Navbar;
