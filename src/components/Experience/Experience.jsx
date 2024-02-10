/** @format */

import Timeline from "../Timeline/Timeline";
import Title from "../Title/Title";

export function Experience() {
  return (
    <section className="min-h-screen w-[75%] max-sm:w-full gap-10 mx-auto m-0 flex flex-col justify-center">
      <div>
        <Title title={"Experiences"} />
      </div>
      <Timeline />
    </section>
  );
}
