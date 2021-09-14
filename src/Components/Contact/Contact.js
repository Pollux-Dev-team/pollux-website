import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col mb-6">
        <h1 className="text-2xl font-bold mb-2">Contact us</h1>
        <div className="bg-yellow-500 w-16 h-1"></div>
      </div>
      <div className="mb-6">
        <p>
          Reach out to us on our email{" "}
          <span className="text-blue-300">polluxfam@gmail.com</span>
        </p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p>Or via mobile on the following numbers</p>
        <p className="text-blue-300">+201095228556</p>
        <p className="text-blue-300">+201939639246</p>
      </div>
    </div>
  );
};

export default Contact;
