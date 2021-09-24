import React from "react";

import "./Home.scss";

//Components
import CountDownTimer from "../../components/CountDownTimer/CountDownTimer";

//images
import aboutDividerimage from "../../assets/images/random-walk-1.png";
import artistImag1 from "../../assets/images/artist-1.png";

const Home = () => {
  const { days, hours, minutes, seconds } = CountDownTimer();

  return (
    <div className="home">
      <section className="heading-section">
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
        <button className="btn btn-primary btn-header">Get Tickets</button>
      </section>

      <section className="section-theme">
        <div className="container">
          <div className="about-theme">
            <h2 className="heading-secondary">The Theme</h2>
            <p className="text text-primary">
              To rewire is to innovate in your field, to introspect, to overcome
              internal biases, to think differently, and to devise ways to
              change society as we know it. Rewire is as much your theme, dear
              audience, as it is ours - its interpretation is up to you, as
              well.
            </p>
          </div>
          <div className="image-theme-container">
            <span>Rewire</span>
          </div>
        </div>
      </section>

      <section className="section-artist">
        <div className="container">
          <div className="image-artist-container">
            <img src={artistImag1} alt="artist" />
          </div>
          <div className="about-artist">
            <h2 className="heading-artist">Mannat Ramaiya</h2>
            <p className="text text-artist">Concept Developer, Saint Gobain</p>
          </div>
        </div>
      </section>

      <section className="section-about">
        <div className="container">
          <div className="about-ted">
            <h2 className="heading-secondary">about TED</h2>
            <p className="text text-primary">
              TED is an annual event where some of the world's leading thinkers
              and doers are invited to share what they are most passionate
              about. "TED" stands for Technology, Entertainment, Design -- three
              broad subject areas that are, collectively, shaping our future.
              TED is owned by a nonprofit, nonpartisan foundation, and is
              devoted to spreading ideas, usually in the form of short, powerful
              talks (18 minutes or less).
            </p>
          </div>
          <div className="about-divider-image">
            <img src={aboutDividerimage} alt="divider" />
          </div>
          <div className="about-tedx">
            <h2 className="heading-secondary">About TEDx</h2>
            <p className="text text-primary">
              TED is an annual event where some of the world's leading thinkers
              and doers are invited to share what they are most passionate
              about. "TED" stands for Technology, Entertainment, Design -- three
              broad subject areas that are, collectively, shaping our future.
              TED is owned by a nonprofit, nonpartisan foundation, and is
              devoted to spreading ideas, usually in the form of short, powerful
              talks (18 minutes or less).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
