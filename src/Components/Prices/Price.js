import React from "react";
import "./Price.css";

const Price = ({ element }) => {
  return (
    <div className="flex justify-center items-center my-4">
      <div className="flex justify-between items-center w-1/2 bg-blue-300 h-11 rounded-md">
        <div className="ml-8">
          <p>{element.title}</p>
        </div>
        <div className="bg-yellow-500 h-full flex justify-center px-4 items-center mr-8">
          <p>${element.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Price;
