/** @format */

import Project from "../Project/Project";
import Title from "../Title/Title";

export default function Projects() {
  return (
    <section className="min-h-screen w-fit mx-auto gap-10 flex flex-col  justify-center">
      <div>
        <Title title={"Project"} />
      </div>
      <div className="flex justify-center flex-wrap max-[863px]:w-fit max-[863px]:mx-auto  gap-3">
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
}
