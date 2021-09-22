import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col border ">
        <div className="flex-1 flex-col md:p-20 p-12">
          <img
            className="m-auto pb-3 w-36"
            src="./Assets/logo.jpg"
            alt="Pollux's logo"
          />
        </div>
        <div className="flex-1 flex-col px-11 md:py-11 py-8">
          <div className="py-3">Quick links</div>
          <div className="my-2 bg-yellow-500 w-16 h-1"></div>
          <Link to="/contact">
            <div className="py-1">Contact us</div>
          </Link>
          <Link to="/">
            <div className="py-1">Testemonials</div>
          </Link>
          <Link to="/">
            <div className="py-1">Services</div>
          </Link>
          <Link to="/portfolio">
            <div className="py-1">Previous Work</div>
          </Link>
        </div>
        <div className="flex-1 flex-col px-11 md:py-11 py-8">
          <div className="py-3">Quick links</div>
          <div className="my-2 bg-yellow-500 w-16 h-1"></div>
          <div className="py-1">contact us</div>
          <div className="py-1">Testemonials</div>
          <div className="py-1">Services</div>
          <div className="py-1">Previous Work</div>
        </div>
      </div>
      <div className="flex flex-row p-4">
        <div className="text-xs text-gray-400 text-center m-auto">
          COPYRIGHTS POLLUX COMPANY @ 2021
        </div>
      </div>
    </div>
  );
}

export default Footer;
