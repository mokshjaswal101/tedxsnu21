import React from "react";

import "./Home.scss";

//Sections
import Title from "./Title";
import About from "./About";
import PastConference from "./PastConference";
import AboutTed from "./AboutTed";
import Contact from "./Contact";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Title id="title" />
        <About />
        {/* <PastConference /> */}
        <FAQ />
        <AboutTed id="aboutted" />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
