import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col m-12">
        <h1 className="text-2xl font-bold mb-2">Contact us</h1>
        <div className="bg-yellow-500 w-16 h-1"></div>
      </div>
      <div className="mb-6">
        <p>
          Reach out to us on our email{" "}
          <a
            href="mailto:polluxfam@gmail.com"
            target="_blank"
            className="text-blue-300"
            rel="noreferrer"
          >
            polluxfam@gmail.com
          </a>
        </p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="mb-1">Or via mobile on the following numbers</p>
        <a href="tel:201270887883" className="text-blue-300">
          +20 127 0887883
        </a>
        <a href="tel:201095228556" className="text-blue-300">
          +20 109 5228556
        </a>
      </div>
    </div>
  );
};

export default Contact;
