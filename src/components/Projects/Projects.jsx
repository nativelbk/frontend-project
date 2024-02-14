/** @format */

import { styles } from "../../style";
import Project from "../Project/Project";
import Title from "../Title/Title";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className=" min-h-screen  mx-auto flex items-center justify-center"
    >
      <div className="absolute left-0 z-[-5]">
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
      {/* fix responsive titre project + all projet */}
      <div className="flex gap-10 justify-center flex-col items-start  ">
        <div
          className="max-lg:pl-10"
        >
          <Title title={"Project"} />
        </div>
        {/* container mis le projet global */}
        <div className="flex max-w-[1000px] flex-wrap gap-5 justify-center items-center 2xl:max-w-[2000px]  2xl:gap-[250px]">
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
      </div>
    </section>
  );
}
