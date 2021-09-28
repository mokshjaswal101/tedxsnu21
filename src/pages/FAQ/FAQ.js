import FAQCard from "../../components/FAQCard/FAQCard";
import "./FAQ.scss";
import FAQs from "../../assets/FAQ/FAQ.js";
const FAQ = () => {
  return (
    <>
      <main className="main">
        <article>
          <h1>Frequently Asked Questions</h1>
          <hr />
          {FAQs.map((item, index) => (
            <FAQCard
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </article>
      </main>
    </>
  );
};
export default FAQ;
