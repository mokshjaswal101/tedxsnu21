import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQCard.scss";
import arrow from "../../assets/svgs/arrow-down.svg";
export default function FAQCard({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  let p =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <motion.div className="FAQCard" onClick={() => setIsOpen(!isOpen)}>
      <AnimatePresence>
        <motion.div className={`question ${isOpen && "active"}`}>
          <p>{question} </p>
          <img alt="arrow" src={arrow} />
        </motion.div>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ opacity: 0 }}
            className="answer"
          >
            <p>{answer === "" ? p : answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
