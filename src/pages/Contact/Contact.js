import React from "react";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contactPage">
      <div className="container">
        <section className="section-heading">
          <h2 className="heading-secondary">About</h2>
          <p className="text text-primary">
            TED and TEDx are two terms which are vastly different, yet most
            confused. TEDx conferences are independently organised by local
            volunteers under a license from TED.
          </p>
          <div className="carousel-container">
            <h2 className="heading-secondary">
              Carousel of Team, stages, different events, themes
            </h2>
            <div className="carousel"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
