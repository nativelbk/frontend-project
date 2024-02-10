/** @format */

import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

export default function About() {
  return (
    <section className="min-h-screen  flex flex-col ">
      <div className="flex justify-center max-lg:gap-20 gap-32 max-[811px]:gap-5 max-md:flex-col items-center my-auto   ">
        <AboutImage />
        <AboutText />
      </div>
      <div className=" max-w-[300px] mx-auto ">
        <img src="/hr.svg" />
      </div>
    </section>
  );
}
