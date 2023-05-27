import React from "react";
import "../App.css";

const Header = () => {
  return (
    <div className="relative min-h-screen">
      <div className="text-center">
        <div className="inline-block image-reflect">
          <img
            className="h-32 w-32 mt-20 xs:h-56 xs:w-56 xs:mt-36 sm:h-64 sm:w-64 sm:mt-40 md:h-96 md:w-96 md:mt-52 lg:h-96 lg:w-96 lg:mt-52 xl:h-96 xl:w-96 xl:mt-52 2xl:h-96 2xl:w-96 2xl:mt-52"
            src={require("../images/logo.png")}
            alt="logo"
          />
        </div>
      </div>
      <div className="z-20 text-center">
        <div className="pt-5 space-x-2 xs:space-x-4">
          <a href="#menu">
            <button className="button text-xs xs:text-base">Order</button>
          </a>
          <a href="#catering">
            <button className="button text-xs xs:text-base">Catering</button>
          </a>
          <a href="#about">
            <button className="button text-xs xs:text-base">About</button>
          </a>
          <a href="#contact">
            <button className="button text-xs xs:text-base">Contact</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
