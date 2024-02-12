/** @format */

import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

export default function About() {
  return (
    <div className="min-h-[100vh] max-w-full overflow-hidden  flex items-center justify-center" id="about">
      <section
        className=" flex flex-col gap-20"
      >
        <div className="flex justify-center  max-lg:gap-20 xl:gap-[150px] max-xl:gap-[200px] max-md:flex-col-reverse max-sm:px-10 max-md:mb-5 items-center my-auto   ">
          <AboutImage />
          <AboutText />
        </div>
        <div className=" max-w-[300px] mx-auto max-md:mt-5  ">
          <img src="/hr.svg" />
        </div>
      </section>
    </div>
  );
}
