/** @format */

import React from "react";
import { styles } from "../../style";
const HeroText = () => {
  return (
    <div className="max-md:max-w-[400px] max-[410px]:max-w-[300px] max-md:px-5 ">
      <div>
        <h1
          className={`${styles.heroHeadText} max-[410px]:text-[32px]  font-bold`}
        >
          HELLO!!!
        </h1>
        <h2
          className={`${styles.heroNameText} max-w-[500px] max-[375px]:text[24px] max-[410px]:text-[28px] font-bold`}
        >
          I'm Ando Nirina RANDRIANAFY
        </h2>
      </div>
      <div className="mt-6 max-w-[400px] max-lg:max-w-[300px] max-md:max-w-[400px] ">
        <button className="w-[100%] text-white bg-blue  h-[50px] max-sm:text-[14px] rounded-md mb-6 hover:bg-indigo-500">
          PYTHON DEVELOPER-DATA-WEB
        </button>{" "}
        <br />
        <button className="w-[100%] text-white bg-transparent border-2 border-white max-sm:text-[14px] h-[50px] rounded-md">
          DOWNLOAD CV
        </button>
      </div>
    </div>
  );
};

export default HeroText;