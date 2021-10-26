import React from "react";
import CountDownTimer from "../../components/CountDownTimer/CountDownTimer";

import "./Tickets.scss";

import ticket1 from "../../assets/images/ticket1.png";
import ticket2 from "../../assets/images/ticket2.png";

import Logo from "../../assets/images/rewire.png";
import { toast, ToastContainer } from "react-toastify";

const Tickets = () => {
  const { days, hours, minutes, seconds } = CountDownTimer();

  return (
    <div className="tickets">
      <ToastContainer />
      <div className="container">
        <div className="tickets-title">
          <div className="title-heading">
            <img src={Logo} alt="" />
            <h2>TEDxShivNadarUniversity 2021</h2>
            <h2>14th November 2021</h2>
          </div>
          <div className="title-image"></div>
        </div>

        <p className="tickets-page-description">
          TEDxShivNadarUniversity is on the 14th of November and the tickets go
          live tonight at 10! Our conference is not merely a series of talks -
          it is so much more! From performances and speaker interactions to top
          notch decor and our carefully curated attendee kit and gifts, the
          conference is an experience that has been 7 months in the making.
          Don't forget to register at 10PM! Payments will be collected over the
          course of the next 3 days.
        </p>

        <div className="price">
          <h2 className="tickets-heading">Pricing</h2>
          <h3 className="tickets-subheading">Students and Faculty</h3>
          <h3 className="tickets-subheading">₹ 1000</h3>
        </div>
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLScBE4BnP-w3_q2SKdLZ_hG061Ms-2VkQOBpQq8pm2NNnaIPfg/viewform?usp=sf_link"
        >
          <button className="btn btn-primary" style={{ marginBottom: "2rem" }}>
            Book Now !
          </button>
        </a>
        <div className="benefits">
          <h2 className="tickets-heading">Benefits</h2>
          <div className="benefit-container">
            <div className="benefits-list">
              <h2 className="tickets-subheading">
                Speakers from fields such as
              </h2>
              <p>Speakers from fields such as</p>

              <ul>
                <li>Code and Tech</li>
                <li>Nano Technology and Medicine</li>
                <li>Urban And Town Planning</li>
                <li>Sustainable Furniture</li>
                <li>Mental Health</li>
                <li>Sustainable Cooking</li>
                <li>The Art of Drag</li>
                <li>Activism</li>
                <li>Disability</li>
              </ul>
            </div>
            <div className="benefits-image">
              <img src={ticket1} alt="ticket"></img>
            </div>
          </div>

          <div className="benefit-container">
            <div className="benefits-list">
              <h2 className="tickets-subheading"> Dazzling Performances </h2>

              <p>Performances at the event by</p>

              <ul>
                <li>Electro Acoustic Bands</li>
                <li>Spoken Word Poets</li>
                <li>Contemporary Dance Groups</li>
              </ul>

              <p>An exciting desert bar, live food stations and more</p>
            </div>
            <div className="benefits-image">
              <img src={ticket2} alt="ticket" />
            </div>
          </div>

          <div className="benefit-container">
            <div className="benefits-list">
              <h2 className="tickets-subheading">Curated Food Menu</h2>

              <p>Large number of food items spread over three breaks</p>

              <ul>
                <li>Refreshments</li>
                <li>Lunch</li>
                <li>High Tea</li>
              </ul>

              <p>An exciting desert bar, live food stations and more</p>
            </div>
            <div className="benefits-image"></div>
          </div>

          <div className="benefit-container">
            <div className="benefits-list">
              <h2 className="tickets-subheading">
                Engagement beyond the Conference hall
              </h2>

              <p>
                One to one speaker interactions <br /> Access to prefunction
                area activites
              </p>

              <ul>
                <li>Story Theatre</li>
                <li>Community Art</li>
                <li>Bioscope</li>
                <li>Idea Exchange</li>
                <li>Conversation Pillars</li>
                <li>Photo Booth</li>
              </ul>

              <p>and much more</p>
            </div>
            <div className="benefits-image"></div>
          </div>
        </div>

        <div className="terms">
          <div className="tickets-heading" style={{ alignSelf: "center" }}>
            Terms and Conditions
          </div>
          <ul>
            <li>Each ticket permits one attendee</li>
            <li>There’s no age restriction for attending the conference</li>
            <li> No outside food is allowed in the conference area</li>
            <li> No alcohol and drugs are allowed in the conference area</li>
            <li> Tickets are non-refundable and non-transferable</li>
            <li>
              Transportation will be provided on request, and will be chargeable
              separately. The pickup and drop-off point will be the Botanical
              Garden Metro Station in Noida.Rights of admission reserved
            </li>
            <li>
              Tickets will be confirmed only upon successful payment of the
              ticket fee
            </li>
            <li>
              Attendees buying tickets under the Student and Alumni categories
              must present their relevant ID cards or documents on the day of
              the conference for verification purposes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
