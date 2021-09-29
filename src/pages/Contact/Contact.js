import React from "react";

import "./Contact.scss";

const Contact = () => {
  return (
    <main className="container">
      <section className="contactPage">
        <div className="contactPage__heading">
          <h2 className="contactPage__heading__title">Contact Us</h2>
          <p className="contactPage__heading__para">
          Answers to all queries, requests and suggestions are just an email or a call away. Please don’t hesitate in reaching out to us.
          </p>
        </div>


        <div className="contactPage__map">
            <div className="contactPage__map__title">Visit Us://Google Map</div>
            <map>
              <iframe className="contactPage__map__embedded" title="Shiv Nadar University" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.431922962545!2d77.57316895081121!3d28.526734495525766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb4eaaaaaaab%3A0x321412756718874c!2sShiv%20Nadar%20University!5e0!3m2!1sen!2sin!4v1632907258626!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
            </map>
        </div>


        <div className="contactPage__form">

          <div className="contactPage__form__embedded">
            <div className="contactPage__form__embedded__title">Quick Message (form here)</div>            
            <div>
            <iframe className="contactPage__form__embedded__form-link" title="TEDxShivNadarUniversity form" src="https://docs.google.com/forms/d/e/1FAIpQLSexkONeCtyEPd_zXVKhU9UkAFlr1yOTk9XbHLaIn72jdJmDFg/viewform?embedded=true" overflow="hidden" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>            
            </div>

          <div className="contactPage__form__about">
          <div className="contactPage__form__about__text1">Also find us on:</div>
          <ul className="contactPage__form__about__links">
            <a href="/#"><li>tedx.club@snu.edu.in</li></a>
            <a href="/#"><li>/tedxshivnadaruni</li></a> 
            <a href="/#"><li>@tedxshivnadaruniversity</li></a>
            <a href="/#"><li>linkedin/twitter/yt?</li></a>
          </ul>
          <div className="contactPage__form__about__text2">Contact Numbers?Address?
          </div>
          </div>
        </div>
        </section>
    </main>
  );
};

export default Contact;
