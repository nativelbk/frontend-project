/** @format */

import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
const Hero = () => {
  return (
    <div className="min-h-[100vh] max-w-full overflow-hidden relative flex max-md:mt-[100px] max-sm:mt-20  my-auto" id="home">
      <main 
        className="container px-10  flex flex-row justify-center items-center mx-auto  max-md:flex-col max-md:justify-center max-sm:mb-8" 
      >
        <div className="max-md:flex">
          <HeroText />
        </div>
        <div className="z-20 max-md:mt-10 ">
          <HeroImage />
        </div>
      </main>
      <div className=" h-[300px] "></div>
      {/* <img
        src="/Element 06.svg"
        alt="element"
        className="absolute top-0 left-[50%] w-9 "
      />
      <img
        src="/Element 09.svg"
        alt="element"
        className="absolute z-[-1] left-[45%] bottom-4 w-9"
      />
      <img
        src="/Union - Copie.svg"
        alt="element"
        className="absolute bottom-2 z-[-1] left-10 w-9"
      />
      <img
        src="/Vector - Copie.svg"
        alt="element"
        className="absolute z-[-1] top-8 left-[13%] w-9 "
      />
      <img src="/Vector (2).png" alt=""
        className="absolute z-[-1] left-[57%] top-[60%] w-20"

      />
      <img src="/Group.png" alt=""
        className="absolute z-[-1] right-20 top-3 w-20"

      /> */}
    </div>
  );
};

export default Hero;
