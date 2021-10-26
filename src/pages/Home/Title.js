import React from "react";
import { Link } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";

import "./Title.scss";

//components
import CountDownTimer from "../../components/CountDownTimer/CountDownTimer";

//images
import Rewire from "../../assets/images/rewire.png";

const Title = () => {
  const { days, hours, minutes, seconds } = CountDownTimer();

  return (
    <>
      <ToastContainer />
      <section className="section-title">
        <img src={Rewire} alt="rewire" />
        <div className="time">
          <div className="days">
            {days == -1 ? "0" : days}
            <span>days</span>
          </div>
          <div className="colon">:</div>
          <div className="hours">
            {hours == -1 ? "0" : hours}
            <span>Hours</span>
          </div>
          <div className="colon">:</div>
          <div className="minutes">
            {minutes == -1 ? "0" : minutes}
            <span>Minutes</span>
          </div>
          <div className="colon">:</div>
          <div className="seconds">
            {seconds == -1 ? "0" : seconds}
            <span>Seconds</span>
          </div>
        </div>
        <Link to="/tickets">
          <button className="btn btn-primary title-btn">Get Tickets</button>
        </Link>

        <div className="border-circle"></div>
      </section>
    </>
  );
};

export default Title;
