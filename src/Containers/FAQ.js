import React from "react";
import Accordion from "../Components/Accordion/Accordion";
import questions from "../Fixtures/FAQ.json";

const FAQ = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-2xl">Frequently Asked Questions</h1>
      </div>
      {questions.map((question) => {
        return <Accordion key={question.id} question={question} />;
      })}
    </div>
  );
};

export default FAQ;
