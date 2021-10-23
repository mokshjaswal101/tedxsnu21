import React, { useState } from "react";

import "./FAQ.scss";

//components
import FAQCard from "../../components/FAQCard/FAQCard";
import FAQs from "../../assets/FAQ/FAQ.js";

const FAQ = () => {
  const [active, setActive] = useState("about ted");

  return (
    <>
      <main className="faq-main" id="faq">
        <div className="faq-information">
          <h1 className="heading heading-primary">FAQ's</h1>
          <ul>
            {Object.keys(FAQs).map((e) => {
              return (
                <li
                  key={e}
                  className={active == e ? "active" : <></>}
                  onClick={() => {
                    setActive(e);
                  }}
                >
                  {e}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="faq-questions">
          {FAQs[active].map((item, index) => (
            <FAQCard
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </main>
    </>
  );
};
export default FAQ;
