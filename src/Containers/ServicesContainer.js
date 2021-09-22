import React from "react";
import Services from "../Components/Services/Services";
import data from "./../Fixtures/Services.json";

const ServicesContainer = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col m-24">
        <h1 className="text-2xl font-bold mb-2">Services</h1>
        <div className="bg-yellow-500 w-16 h-1"></div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center m-12">
        {data.map((element, index) => {
          return <Services service={element} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ServicesContainer;
