/** @format */

import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

export default function About() {
  return (
    <div
      className="min-h-[100vh] max-w-full overflow-hidden  flex items-center justify-center"
      id="about"
    >
      <section className=" flex flex-col gap-20">
        <div className="w-[2000px]  justify-around max-[2256px]:justify-evenly max-2xl:w-screen  max-lg:gap-20 flex flex-row max-lg:mx max-lg:justify-center items-center mx-auto max-md:flex-col-reverse  max-lg:px-8">
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
