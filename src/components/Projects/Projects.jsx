/** @format */

import { styles } from "../../style";
import Project from "../Project/Project";
import Title from "../Title/Title";

export default function Projects() {
  return (
    <div className="min-h-[80vh] " id="projects">
      <div className={`${styles.paddingTittle} mb-8 max-sm:mb-3`}>
        <Title title={"Project"} />
      </div>
      <section className="w-fit mx-auto gap-10 flex flex-col  justify-center">
        <div className="flex justify-center flex-wrap max-[863px]:w-fit max-[863px]:mx-auto  gap-3 max-sm:gap-10">
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
