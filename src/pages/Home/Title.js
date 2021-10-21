import React from "react";

import "./Title.scss";

//components
import CountDownTimer from "../../components/CountDownTimer/CountDownTimer";

//images
import Rewire from "../../assets/images/rewire.png";

const Title = () => {
  const { days, hours, minutes, seconds } = CountDownTimer();

  return (
    <>
      <section className="section-title">
        <img src={Rewire} alt="rewire" />
        <div className="time">
          <div className="days">
            {days}
            <span>days</span>
          </div>
          <div className="colon">:</div>
          <div className="hours">
            {hours}
            <span>Hours</span>
          </div>
          <div className="colon">:</div>
          <div className="minutes">
            {minutes}
            <span>Minutes</span>
          </div>
          <div className="colon">:</div>
          <div className="seconds">
            {seconds}
            <span>Seconds</span>
          </div>
        </div>
        <div className="btn btn-primary title-btn">Get Tickets</div>
        <div className="border-circle"></div>
      </section>
    </>
  );
};

export default Title;
