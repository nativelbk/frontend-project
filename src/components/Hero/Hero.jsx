/** @format */

import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
const Hero = () => {
  return (
    <div className="min-h-[80vh] max-w-full overflow-hidden relative" id="home">
      <main
        className="container px-10 mt-20 flex flex-row justify-around mx-auto  max-md:flex-col max-md:justify-center
                items-center"
      >
        <div className="max-md:flex">
          <HeroText />
        </div>
        <div className="z-20 max-md:mt-10 ">
          <HeroImage />
        </div>
      </main>
      {/* <img
        src="/Achernar.svg"
        className=" z-[-1] absolute right-[-20%] top-[-60px]   "
      /> */}
      {/* <img
        src="/Element 06.svg"
        alt="element"
        className="absolute top-0 left-[50%] w-9 "
      />
      <img
        src="/Element 09.svg"
        alt="element"
        className="absolute z-[-1] right-8 w-9"
      />
      <img
        src="/Union - Copie.svg"
        alt="element"
        className=" top-[50%] z-[-1] left-8 w-9"
      />
      <img
        src="/Vector - Copie.svg"
        alt="element"
        className="absolute z-[-1] top-2 w-9 "
      /> */}
    </div>
  );
};

export default Hero;
