import React from "react";

function PreviousWork({ imgSource, header, description }) {
  return (
    <div className="p-4 m-4 flex-col w-64 border border-blue-300 rounded-lg">
      <div className="p-3 flex-1">
        <img
          className="m-auto text-center flex-shrink-0 rounded-lg"
          src={imgSource}
          alt={header}
        />
      </div>
      <div classname="flex-1 p-6">
        <h4 className="main text-center font-bold">{header}</h4>
        <p className="main text-center text-blue-300">{description}</p>
      </div>
    </div>
  );
}

export default PreviousWork;
