import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" mt-8 mb-4 flex flex-row relative bg-white border">
      <div className="flex flex-1 w-min ml-6 md:ml-24 h-auto">
        <Link to="/">
          <img
            className="flex-none h-auto w-24 mb-0"
            src="./Assets/logo.jpg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="md:flex-row flex-col toggle hidden md:flex w-full md:w-auto text-sm h-max md:mr-12">
        <Link to="/">
          <div className="m-6 block md:inline-block">Home</div>
        </Link>
        <Link to="/prices">
          <div className="m-6 block md:inline-block">Prices</div>
        </Link>
        <Link to="/portfolio">
          <div className="m-6 block md:inline-block" >Portfolio</div>
        </Link>
        <Link to="/contact">
          <div className="m-2 p-3 block md:inline-block border rounded-3xl bg-red-700 text-white">
            Contact Us!
          </div>
        </Link>
      </div>
      <div className="flex flex-col md:hidden">
        <button
            id="hamburger"
            onClick={() => {
              const navToggle = document.getElementsByClassName("toggle");
              for (let i = 0; i < navToggle.length; i++) {
                navToggle.item(i).classList.toggle("hidden");
              }
            }}
          >
            <img
              className="toggle block my-3 mr-6 top-0"
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
              alt="menu squared"
            />
            <img
              className="flex flex-col toggle hidden my-3 mr-6 top-0 right-0 absolute"
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
              alt="close window"
            />
        </button>
      </div>
    </div>
  );
}

export default Header;
