import React from "react";
import Accordion from "../Components/Accordion/Accordion";
import questions from "../Fixtures/FAQ.json";

const FAQ = () => {
  return (
    <div>
      {questions.map((question) => {
        return <Accordion key={question.id} question={question} />;
      })}
    </div>
  );
};

export default FAQ;
