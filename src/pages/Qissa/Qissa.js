import React, { useState } from "react";

import "./Qissa.scss";

import video from "../../assets/images/qissa.mp4";

import Speakers from "../../assets/Qissa/Qissa";

//images
import Logo from "../../assets/images/tedx_logo_small.png";
import QissaBack from "../../assets/images/qissa_back.png";
import QissaLogo from "../../assets/images/qissa_logo.png";
import QissaMap from "../../assets/images/Qissa_map.png";

import amaan from "../../assets/images/amaan.png";
import siddhi from "../../assets/images/siddhi.png";
import agrima from "../../assets/images/agrima.png";
import ahlaya from "../../assets/images/ahlaya.png";
import kabir from "../../assets/images/kabir.png";
import shruti from "../../assets/images/shruti.png";
import jannat from "../../assets/images/jannat.png";
const array = [jannat, siddhi, amaan, shruti, kabir, ahlaya, agrima];

const Qissa = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="qissa">
      <div className="qissa-container">
        <img src={QissaLogo} alt="qissa logo"></img>
        <h2 className="qissa-title">
          Come and Join us at the Canopies <br />
          23rd October, 07:00 PM
        </h2>

        <video controls>
          <source src={video} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>

        <h1 className="heading qissa-speakers-heading">
          Our Speakers and their Stories
        </h1>

        <div
          className="banner"
          style={{
            backgroundImage: "url(" + QissaBack + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="banner-info">
            <div className="banner-name">{Speakers[selected].name}</div>
            <h2 className="banner-title">{Speakers[selected].title}</h2>
            <p className="banner-description">
              {Speakers[selected].description}
            </p>
            <h3 className="banner-tw">TW: {Speakers[selected].tw}</h3>
          </div>
        </div>

        <div className="qissa-speakers">
          <div className="speakers-list">
            {Speakers.map((element, ind) => {
              return (
                <div
                  className="speaker-box"
                  style={{
                    backgroundImage: "url(" + array[ind] + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  onClick={() => {
                    setSelected(ind);
                    document
                      .querySelector(".qissa-speakers-heading")
                      .scrollIntoView();
                  }}
                >
                  <span
                    className={`name`}
                    style={
                      element.name == "Jannat"
                        ? { backgroundColor: "black", color: "white" }
                        : element.name == "Shruti"
                        ? { color: "white" }
                        : element.name == "Amaan"
                        ? { backgroundColor: "white" }
                        : null
                    }
                  >
                    {element.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="qissa-location">
          <h1 className="heading qissa-speakers-heading">The Qissa Map</h1>
          <img src={QissaMap} alt="map" />
        </div>
      </div>
    </div>
  );
};

export default Qissa;
