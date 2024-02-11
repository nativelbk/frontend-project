/** @format */

import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

export default function About() {
  return (
    <section className="min-h-[80vh]  flex flex-col " id="about">
      <div className="flex justify-center max-lg:gap-20 gap-32 max-[811px]:gap-5 max-md:flex-col-reverse max-sm:px-10 max-md:mb-5 items-center my-auto   ">
        <AboutImage />
        <AboutText />
      </div>
      <div className=" max-w-[300px] mx-auto max-md:mt-5 ">
        <img src="/hr.svg" />
      </div>
    </section>
  );
}
