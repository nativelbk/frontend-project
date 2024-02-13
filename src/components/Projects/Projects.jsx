/** @format */

import { styles } from "../../style";
import Project from "../Project/Project";
import Title from "../Title/Title";

export default function Projects() {
  return (
    <div className="min-h-[100vh] max-w-full overflow-hidden  relative flex items-center justify-center" id="projects">
      <section className=" max-w-[85%] max-lg:max-w-full max-md:max-w-[90%] max-sm:max-w-full gap-10 flex flex-col  justify-center ">
      <div className={` max-lg:ml-10 max-md:ml-0 max-sm:mt-10 max-sm:mb-3`}>
        <Title title={"Project"} />
      </div>
        <div className="flex justify-center flex-nowrap max-md:flex-col max-lg:flex-wrap  max-lg:gap-6 max-[863px]:w-fit max-[863px]:mx-auto  gap-20 max-sm:gap-10">
          <Project
            title={"Mademoiselleai"}
            description={"A website with AI solutions and automates"}
            imageSrc={"/mademoiselleai.svg"}
            link={"https://www.mademoiselleai.com"}
          />
          <Project
            title={"Grouillez vous"}
            description={"A website with highly efficient GPT powered chatbot"}
            imageSrc={"/Grouillez-vous.svg"}
            link={"https://www.grouillez-vous.com"}
          />
          <Project
            title={"Tradago.ai"}
            description={"An AI-powered trading platform"}
            imageSrc={"/tragado-ai.svg"}
            link={"https://www.tradago.ai"}
          />
        </div>
      </section>
    </div>
  );
}
