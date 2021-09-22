import React from "react";
import Testemonial from "../Components/Testemonial/Testemonial";
import data from "../Fixtures/Testemonials.json";

const TestemonialContainer = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col mb-12">
        <h1 className="text-2xl font-bold mb-2">Testemonials</h1>
        <div className="bg-yellow-500 w-16 h-1"></div>
      </div>
      <div className="flex justify-center items-center">
        {data.map((element, index) => {
          return <Testemonial customer={element} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TestemonialContainer;
