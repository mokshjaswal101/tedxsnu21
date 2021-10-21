import React from "react";

import "./Qissa.scss";

//images
import Logo from "../../assets/images/tedx_logo_small.png";
import QissaBack from "../../assets/images/qissa_back.png";

import Speakers from "../../assets/Qissa/Qissa";

const Qissa = () => {
  return (
    <div className="qissa">
      <div className="qissa-container">
        <h1 className="heading heading-primary">Qissa</h1>
        <img className="banner" src={QissaBack} alt="qissa" />
        <img className="logo" src={Logo} alt="logo" />

        <div className="qissa-speakers">
          <h1 className="heading">"Speakers Qissa 2021"</h1>

          <div className="speakers-list">
            {Speakers.map((element, index) => {
              return (
                <div className="speaker-box">
                  <span className="name">{element.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qissa;
