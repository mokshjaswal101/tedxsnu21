import React, { useState } from "react";

import "./Qissa.scss";

//images
import Logo from "../../assets/images/tedx_logo_small.png";
import QissaBack from "../../assets/images/qissa_back.png";

import amaan from "../../assets/images/amaan.png";
import siddhi from "../../assets/images/siddhi.png";
import agrima from "../../assets/images/agrima.png";
import ahlaya from "../../assets/images/ahlaya.png";
import kabir from "../../assets/images/kabir.png";
import shruti from "../../assets/images/shruti.png";
import jannat from "../../assets/images/jannat.png";

import video from "../../assets/images/qissa.mp4";

import Speakers from "../../assets/Qissa/Qissa";

const Qissa = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="qissa">
      <div className="qissa-container">
        <h1 className="heading heading-primary">Qissa</h1>
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
              " {Speakers[selected].description} "
            </p>
            <h3 className="banner-tw">TW: {Speakers[selected].tw}</h3>
          </div>
        </div>

        <div className="qissa-speakers">
          <div className="speakers-list">
            <div
              className="speaker-box"
              style={{
                backgroundImage: "url(" + jannat + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => {
                setSelected(0);
              }}
            >
              <span className="name">{"Jannat"}</span>
            </div>
            <div
              className="speaker-box"
              style={{
                backgroundImage: "url(" + siddhi + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => {
                setSelected(1);
              }}
            >
              <span className="name">{"Siddhi"}</span>
            </div>
            <div
              className="speaker-box"
              style={{
                backgroundImage: "url(" + amaan + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => {
                setSelected(2);
              }}
            >
              <span className="name">{"Amaan"}</span>
            </div>
            <div
              className="speaker-box"
              style={{
                backgroundImage: "url(" + shruti + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => {
                setSelected(3);
              }}
            >
              <span className="name">{"Shruti"}</span>
            </div>
            <div
              className="speaker-box"
              style={{
                backgroundImage: "url(" + kabir + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => {
                setSelected(4);
              }}
            >
              <span className="name">{"Kabir"}</span>
            </div>
            <div
              className="speaker-box"
              style={{
                backgroundImage: "url(" + ahlaya + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => {
                setSelected(5);
              }}
            >
              <span className="name">{"Ahlaya"}</span>
            </div>
            <div
              className="speaker-box"
              style={{
                backgroundImage: "url(" + agrima + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => {
                setSelected(6);
              }}
            >
              <span className="name">{"Agrima"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qissa;
