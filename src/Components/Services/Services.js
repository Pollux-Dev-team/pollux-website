import React from "react";

const Services = ({ service }) => {
  return (
    <div className=" w-48 text-center flex flex-col justify-center items-center m-6">
      <img
        className="rounded-full  w-6/12 mb-4"
        src={service.img}
        alt="Service"
      />
      <p className="mb-4 text-lg">{service.name}</p>
      <p className="text-sm">{service.description}</p>
    </div>
  );
};

export default Services;
