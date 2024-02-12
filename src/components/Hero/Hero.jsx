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
      <img
        src="/circle.svg"
        alt="element"
        className="absolute top-[30%] left-[50%] w-9 max-sm:hidden "
      />
      <img
        src="/circle-fleche.svg"
        alt="element"
        className="absolute z-[-1] left-[45%] bottom-4 w-9  max-sm:hidden"
      />
      <img
        src="/etoile.svg"
        alt="element"
        className="absolute bottom-2 z-[-1] top-[28%] left-[12%] w-9 max-sm:top-[5%] max-sm:left-[0%]"
      />
      <img
        src="/rond.svg"
        alt="element"
        className="absolute z-[-1] top-[15%] left-[18%] w-9  max-sm:top-[15%] max-sm:left-[80%]"
      />
      <img src="/scrue.png" alt=""
        className="absolute z-[-1] left-[10%] bottom-[30%] w-20"

      />
      <img src="/Group.png" alt=""
        className="absolute z-[-1] right-20 top-[50%] w-20"

      />
    </div>
  );
};

export default Hero;
