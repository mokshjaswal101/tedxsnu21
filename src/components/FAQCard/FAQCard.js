import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./FAQCard.scss";

export default function FAQCard({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  let p =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <motion.div className="FAQCard" onClick={() => setIsOpen(!isOpen)}>
      <AnimatePresence>
        <motion.div className={`question ${isOpen && "active"}`}>
          <i className={isOpen ? `fas fa-minus` : "fas fa-plus"}></i>
          <p>{question} </p>
        </motion.div>
        {isOpen && (
          <motion.p
            key="answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: [0, 1],
              height: "auto",
            }}
            className="answer"
          >
            {answer === "" ? p : answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
