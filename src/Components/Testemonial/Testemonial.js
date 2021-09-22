import React from "react";

const Testemonial = ({ customer }) => {
  return (
    <div className="flex-col m-10 text-center">
      <img
        className="rounded-full mb-4 m-auto"
        src={customer.photo}
        alt={customer.altText}
      />
      <p className="font-bold">{`"${customer.description}"`}</p>

      <p className="mt-2 text-yellow-500	">{`${customer.title}. ${customer.name}`}</p>
    </div>
  );
};

export default Testemonial;
