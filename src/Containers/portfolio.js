import React from "react";
import Card from "../Components/previousWork/previousWork";
import data from "../Fixtures/portfolio.json";

function Portfolio() {
  return (
    <div className="m-4">
      <div className="flex justify-center items-center flex-col mb-6">
        <h1 className="text-2xl font-bold mb-2">Our previous Work</h1>
        <div className="bg-yellow-500 w-16 h-1"></div>
      </div>
      <div className="justify-center flex flex-wrap">
        {data.map((card) => {
          return (
          <Card  
            imgSource = {card.imgSource}
            header = {card.header}
            description = {card.description}
          />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;