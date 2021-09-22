import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className=" mt-8 mb-4 flex flex-row relative bg-white border h-16">
      <div className="flex flex-1 w-max">
        <div className="flex-1"></div>
        <Link to="/">
          <img
            className="flex-1 mx-auto max-w-full max-h-full"
            src="./Assets/logo.jpg"
            alt="logo"
          />
        </Link>
        <div className="flex-1"></div>
        <div className="flex-1"></div>
      </div>
      <div className="flex flex-row flex-1 justify-center content-around text-sm">
        <Link to="/">
          <div className="m-6">Home</div>
        </Link>
        <Link to="/prices">
          <div className="m-6">Prices</div>
        </Link>
        <Link to="/portfolio">
          <div className="m-6">Portfolio</div>
        </Link>
        <Link to="/contact">
          <div className="m-2 p-3 border rounded-3xl bg-red-700">
            Contact Us!
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
