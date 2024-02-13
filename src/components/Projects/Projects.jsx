/** @format */

import { styles } from "../../style";
import Project from "../Project/Project";
import Title from "../Title/Title";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className=" max-w-[85%] relative mx-auto max-lg:max-w-full max-md:max-w-[90%] max-sm:max-w-full gap-10 flex flex-col h-screen items-center justify-center "
    >
      <div className="absolute z-[-1] top-16  right-[0]  ">
        <motion.div
          animate={{
            background: ["#1976D2", "#FF4D6D"],
            scale: [1, 0.95, 1.1],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className=" blr "
        ></motion.div>
        <motion.div
          animate={{
            background: ["#1976D2", "#152432"],
            scale: [1, 0.95, 1.1],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className=" blr  "
        ></motion.div>
        <motion.div
          animate={{
            background: ["#1976D2", "#7B2CBF"],
            scale: [1, 0.95, 1.1],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className=" blr  "
        ></motion.div>
      </div>
      <div className="flex justify-center 2xl:w-[50vw] relative 2xl:justify-around mx-auto flex-nowrap max-md:flex-col max-lg:flex-wrap  max-lg:gap-6 max-[863px]:w-fit max-[863px]:mx-auto  gap-20 max-sm:gap-10">
        <div
          className={` max-lg:ml-10 absolute left-0 top-[-100px] max-md:ml-0 max-sm:mt-10 max-sm:mb-3`}
        >
          <Title title={"Project"} />
        </div>
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
  );
}
