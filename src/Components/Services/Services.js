import React from "react";

const Services = ({ service }) => {
  return (
    <div className="w-40 text-center  flex flex-col justify-center items-center  mx-6">
      <img
        className="rounded-full  w-10/12 mb-4"
        src={service.img}
        alt="Service"
      />
      <p>{service.name}</p>
    </div>
  );
};

export default Services;
