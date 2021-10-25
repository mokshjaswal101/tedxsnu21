import React from "react";

import "./Contact.scss";

//images
import Logo from "../../assets/images/tedx_snu_logo_black.png";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading heading-primary " id="contact">
        Contact
      </h1>
      <div className="contact-container">
        <div className="contact-information">
          <img src={Logo} alt="logo" />
          <p className="text information">
            <span>
              NH91, Tehsil Dadri, <br /> Greater Noida, Uttar Pradesh <br />
              201314
            </span>

            <span>https://snu.edu.in/</span>
            <span>+91-120-7170100</span>
            <span>tedx@snu.edu.in</span>
          </p>
          <div className="socials">
            <h3 className="social-heading">Follow Us</h3>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-youtube"></i>
          </div>
          <h2>
            This independent TEDx event is operated under license from TED.
          </h2>
        </div>
        <div className="contact-form">
          <form>
            <table
              className="contact-form-table"
              cellPadding="0"
              cellSpacing="0"
            >
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>
                    <input placeholder="John Doe"></input>
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>
                    <input placeholder="abc@gmail.com"></input>
                  </td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>:</td>
                  <td>
                    <input placeholder="1234567890"></input>
                  </td>
                </tr>
                <tr>
                  <td>Message Us</td>
                  <td>:</td>
                  <td>
                    <input placeholder="Write to Us"></input>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
