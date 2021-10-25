import React from "react";

import "./Home.scss";

//Sections
import Title from "./Title";
import About from "./About";
import PastConference from "./PastConference";
import AboutTed from "./AboutTed";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Speakers from "./Speakers";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Title />
        <About />
        <Speakers />
        <PastConference />
        <FAQ />
        <AboutTed />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
