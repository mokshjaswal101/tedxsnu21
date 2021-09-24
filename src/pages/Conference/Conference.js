import React from "react";

import "./Conference.scss";

import RandomWalk2 from "../../assets/images/random-walk-2.png";
import RandomWalk3 from "../../assets/images/random-walk-3.png";

const Conference = () => {
  return (
    <div className="aboutPage">
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

        <section className="section-about">
          <div className="about-tedx-shivnadar">
            <h2 className="heading-secondary">About TEDxShivNadarUniversity</h2>
            <p className="text text-primary">
              TEDxShivNadarUniversity is one of the flagship TEDx events in the
              Delhi-NCR region, where “x” means: independently organized TED
              event. At TEDxShivNadarUniversity live speakers and entertainers
              spark deep discussion and connection in our audience.
              TEDxShivNadarUniversity unites the community of Shiv Nadar
              University through the power of ideas. Staffed and run entirely by
              students, we aim to showcase the biggest ideas in the University
              on the world's biggest platform. The TED Conference provides
              general guidance for the TEDx program, but individual TEDx events,
              including ours, are self-organized.
            </p>
          </div>

          <div className="about-ted">
            <div className="about-info">
              <h2 className="heading-secondary">About TED</h2>
              <p className="text text-primary">
                TED is an annual event where some of the world's leading
                thinkers and doers are invited to share what they are most
                passionate about. "TED" stands for Technology, Entertainment,
                Design -- three broad subject areas that are, collectively,
                shaping our future. TED is owned by a nonprofit, nonpartisan
                foundation, and is devoted to spreading ideas, usually in the
                form of short, powerful talks (18 minutes or less).
              </p>
            </div>
            <div
              className="about-image-container"
              style={{ backgroundImage: `url(${RandomWalk3})` }}
            >
              <div className="about-image-container-inner"></div>
            </div>
          </div>

          <div className="about-tedx">
            <div className="about-info">
              <h2 className="heading-secondary">About TEDx</h2>
              <p className="text text-primary">
                TEvolving out of the success of TED, TEDx was created in 2009 in
                the spirit of TED's mission, "ideas worth spreading." It
                empowers independent organizers to bring a TED-like experience
                under a free license granted by TED. Just like in TED
                conferences, ideas are spread in the TEDx conferences in the
                suite of short, carefully prepared talks, demonstrations and
                performances that are idea-focused, and cover a wide range of
                subjects to foster learning, inspiration and wonder – and
                provoke conversations that matter.
              </p>
            </div>
            <div
              className="about-image-container"
              style={{ backgroundImage: `url(${RandomWalk2})` }}
            >
              <div className="about-image-container-inner"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Conference;
