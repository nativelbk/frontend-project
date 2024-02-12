/** @format */

import { styles } from "../../style";
import Timeline from "../Timeline/Timeline";
import Title from "../Title/Title";

export function Experience() {
  return (
    <div className="min-h-[100vh] max-w-full overflow-hidden  relative flex items-center justify-center" id="experiences">

      <section className="  max-w-[65%] max-lg:max-w-full max-md:max-w-[90%] max-sm:max-w-full  max-md:mx-auto  mx-auto  flex flex-col justify-center">
        <div className="max-sm:ml-10">
        <Title title={"Experiences"} />

        </div>
          <Timeline />
      </section>
    </div>
  );
}
