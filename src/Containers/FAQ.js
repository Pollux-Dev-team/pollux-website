import React from "react";
import Accordion from "../Components/Accordion/Accordion";
import questions from "../Fixtures/FAQ.json";

const FAQ = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col mb-6">
        <h1 className="text-2xl font-bold mb-2">Frequently Asked Questions</h1>
        <div className="bg-yellow-500 w-16 h-1"></div>
      </div>
      {questions.map((question) => {
        return <Accordion key={question.id} question={question} />;
      })}
    </div>
  );
};

export default FAQ;
