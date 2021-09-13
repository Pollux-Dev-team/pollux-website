import React from "react";
import Price from "../Components/Prices/Price";
import prices from "../Fixtures/Prices.json";

const ComponentPrices = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col mb-6">
        <h1 className="text-2xl font-bold mb-2">Component Prices</h1>
        <div className="bg-yellow-500 w-16 h-1"></div>
      </div>
      <div>
        {prices.map((element) => {
          return <Price key={element.id} element={element} />;
        })}
      </div>
    </div>
  );
};

export default ComponentPrices;
