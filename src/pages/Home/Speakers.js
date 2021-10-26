import React, { useState } from "react";

import "./Speakers.scss";

import SpeakerText from "../../assets/Speakers/Speakers";

const reqSpeakers = require.context(
  "../../assets/svgs/SpeakerHighlight",
  true,
  /\.png$/
);
const SpeakerDes = reqSpeakers.keys().map((path) => reqSpeakers(path));

const reqSvgs = require.context("../../assets/svgs/Speakers", true, /\.png$/);
const svgs = reqSvgs.keys().map((path) => reqSvgs(path));

function Speakers() {
  const [clicked, setClicked] = useState(4);

  const style = (index) => {
    const styleOb = {
      position: "relative",
      marginLeft: "0px",
      marginTop: "0px",
      marginBottom: "0px",
    };
    if (index === 0 || index === 8) styleOb.marginLeft = "87%";
    else if (index === 7 || index === 1) styleOb.marginLeft = "62%";
    else if (index === 6 || index === 2) styleOb.marginLeft = "38%";
    else if (index === 5 || index === 3) styleOb.marginLeft = "15%";
    if (index > 4) styleOb.marginBottom = "-8rem";
    else if (index < 4) styleOb.marginTop = "-8rem";
    else if (index == 4) {
      styleOb.marginTop = "0px";
      styleOb.marginBottom = "0px";
    }
    return styleOb;
  };

  return (
    <>
      <div id="speakers" className="speakers">
        <div className="speakers__left">
          <h1 id="heading-scroll">Our Speakers</h1>
        </div>
        <div className="speaker-information">
          <div className="name">{SpeakerText[clicked].name}</div>
          <div className="title">{SpeakerText[clicked].title}</div>
          <div className="description">{SpeakerText[clicked].description}</div>
        </div>
        <div className="speakers__right">
          {svgs.map((svg, index) => (
            <img
              className={
                clicked == index
                  ? "img-clicked" + ` img${index}`
                  : `img${index}`
              }
              src={index == clicked ? SpeakerDes[index].default : svg.default}
              alt="img"
              key={index}
              onClick={() => {
                setClicked(index);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Speakers;
