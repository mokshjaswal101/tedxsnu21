import React from "react";

import "./Footer.scss";
import footerTop from "../../assets/images/footer-top.png";
import logo from "../../assets/images/tedx_snu_logo_black.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={footerTop} alt="footer" className="footer-top" />
      <div className="container">
        <div className="tedx-info">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="socials">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-youtube"></i>
          </div>
          <p className="text text-footer">
            This independent TEDx event is operated under license from TED.
          </p>
        </div>
        <div className="about">
          <h3 className="heading-footer">About</h3>
          <span className="text-footer">The Conference</span>
          <span className="text-footer">Contact Us</span>
          <span className="text-footer">FAQs</span>
        </div>

        <div className="performers">
          <h3 className="heading-footer">Presenters</h3>
          <span className="text-footer">Speakers</span>
          <span className="text-footer">Performers Us</span>
          <h3 className="heading-footer">Partners</h3>
        </div>
        <div className="past">
          <h3 className="heading-footer">Past Conferences</h3>
          <span className="text-footer">2019</span>
          <span className="text-footer">2018</span>
          <span className="text-footer">2017</span>
        </div>
        <div className="tickets">
          <button className="btn btn-primary">Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
