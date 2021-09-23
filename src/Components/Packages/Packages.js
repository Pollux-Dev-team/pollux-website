import React from "react";
import { Link } from "react-router-dom";

function Packages() {
  return (
    <div className="flex flex-col md:mx-48 mx-12 my-24">
      <div className="flex justify-center items-center flex-col m-12">
        <h1 className="text-2xl font-bold mb-2">Our packages</h1>
        <div className="bg-yellow-500 w-16 h-1"></div>
      </div>
      <div className="flex md:flex-row flex-col m-5">
        <div className="flex flex-col bg-blue-300 rounded-md m-5 p-8 md:flex-shrink-0 md:w-1/3">
          <div className="text-center font-bold text-xl p-1">Save money</div>
          <div className="text-center font-light text-white text-xl pb-1">
            choose pollux
          </div>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make
          </p>
          <p className="text-center">
            when an unknown printer took a galley of type and scrambled it to
            make
          </p>
        </div>
        <div className="flex flex-col mx-3 mt-8 md:w-2/3">
          <div classname="flex flex-row text-left">
            <p className="text-2xl mx-3 font-bold italic">
              Start now with our basic package!
            </p>
          </div>
          <div className="flex md:flex-row flex-col my-5">
            <div className="flex md:w-1/3 flex-col mx-2 md:my-0 my-3 bg-blue-300 p-3 rounded-md">
              <div className="font-bold text-center lg:text-4xl text-2xl p-6">19.99$</div>
              <div className="text-center text-white">SILVER PACKAGE</div>
              <ul className="list-inside list-disc p-4">
                <li className="py-2">Lorem ipsum is</li>
                <li className="py-2">dummy text of the</li>
                <li className="py-2">printing and typesetting industry</li>
                <li className="py-2">Lorem Ipsum has</li>
                <li className="py-2">the industry's stand dummy.</li>
              </ul>
              <Link
                to="/contact"
                className="text-white w-24 mx-auto my-3 text-center bg-red-500 rounded-lg"
              >
                <button>Purchase</button>
              </Link>
            </div>
            <div className="flex md:w-1/3 flex-col mx-2 md:my-0 my-3 bg-blue-300 p-3 rounded-md">
              <div className="font-bold text-center lg:text-4xl text-2xl p-6">19.99$</div>
              <div className="text-center text-white">SILVER PACKAGE</div>
              <ul className="list-inside list-disc p-4">
                <li className="py-2">Lorem ipsum is</li>
                <li className="py-2">dummy text of the</li>
                <li className="py-2">printing and typesetting industry</li>
                <li className="py-2">Lorem Ipsum has</li>
                <li className="py-2">the industry's stand dummy.</li>
              </ul>
              <Link
                to="/contact"
                className="text-white w-24 mx-auto my-3 text-center bg-red-500 rounded-lg"
              >
                <button>Purchase</button>
              </Link>
            </div>
            <div className="flex md:w-1/3 flex-col mx-2 md:my-0 my-3 bg-blue-300 p-3 rounded-md">
              <div className="font-bold text-center lg:text-4xl text-2xl p-6">19.99$</div>
              <div className="text-center text-white">SILVER PACKAGE</div>
              <ul className="list-inside list-disc p-4">
                <li className="py-2">Lorem ipsum is</li>
                <li className="py-2">dummy text of the</li>
                <li className="py-2">printing and typesetting industry</li>
                <li className="py-2">Lorem Ipsum has</li>
                <li className="py-2">the industry's stand dummy.</li>
              </ul>
              <Link
                to="/contact"
                className="text-white w-24 mx-auto my-3 text-center bg-red-500 rounded-lg"
              >
                <button>Purchase</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
