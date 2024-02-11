/** @format */

import Timeline from "../Timeline/Timeline";
import Title from "../Title/Title";

export function Experience() {
  return (
    <section className="min-h-screen relative w-[75%] max-sm:w-full gap-10 mx-auto m-0 flex flex-col justify-center">
      <img
        src="/layer-blur-timeline.svg"
        className=" z-0 absolute left-[-20%] max-sm:left-[0%] "
      />
      <div>
        <Title title={"Experiences"} />
      </div>
      <Timeline />
    </section>
  );
}
