/** @format */

import { styles } from "../../style";
import Timeline from "../Timeline/Timeline";
import Title from "../Title/Title";

export function Experience() {
  return (
    <div className="min-h-screen" id="experiences">

      <div className={`${styles.paddingTittle} mb-8 max-sm:mb-3`}>
        <Title title={"Experiences"} />
      </div>
      <section className=" relative w-[75%] max-sm:w-full gap-10 mx-auto m-0 flex flex-col justify-center">
        <img
          src="/layer-blur-timeline.svg"
          className=" z-0 absolute left-[-20%] max-sm:left-[0%] "
        />
        <Timeline />
      </section>
    </div>
  );
}
