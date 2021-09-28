import FAQCard from "../../components/FAQCard/FAQCard";
import "./FAQ.scss";
import FAQs from "../../assets/FAQ/FAQ.js";
const FAQ = () => {
  return (
    <>
      <main className="main">
        <section>
          <h1>Frequently Asked Questions</h1>
          <hr />
          {FAQs.map((item) => (
            <FAQCard question={item.question} answer={item.answer} />
          ))}
        </section>
      </main>
    </>
  );
};
export default FAQ;
