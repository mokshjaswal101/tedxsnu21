import React from "react";

import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="border-circle"></div>
      <h1 className="heading heading-primary">About</h1>
      <h1 className="heading heading-secondary">
        WHAT’S TED, TEDx, TEDxShivNadarUniversity
      </h1>
      <p className="text">
        TED is a nonprofit devoted to spreading ideas, usually in the form of
        short, powerful talks in 18 minutes or less. TED began in 1984 as a
        conference where Technology, Entertainment and Design converged, and
        today covers almost all topics — from science to business to global
        issues — in more than 100 languages. <br />
        <br />
        Meanwhile, independently run TEDx events help share ideas in local
        communities around the world. TEDxShivNadarUniversity is an
        independently organized TEDx event that students at Shiv Nadar
        University have been organizing for the past 5 years. This year, the
        conference is slated for the 14th of November, and is a day long event.
        <br />
        <br />
        TEDxShivNadarUniversity is the culmination of 8 months of solely
        student-led efforts, and is one of the most looked forward to events in
        the National Capital Region. An official audience of 100 people (as per
        TED guidelines) attends the event, and is an amalgam of students,
        academicians, sponsor delegates, corporate professionals and more.
        <br />
        <br />
      </p>
    </div>
  );
};

export default About;
