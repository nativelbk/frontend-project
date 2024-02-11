/** @format */
import { motion } from "framer-motion";
import SkillTitle from "../Title/SkillTitle";
import Skill from "./Skill";
import { useEffect, useState } from "react";

export default function SkillList({ skills, imageSrc, title }) {
  return (
    <div>
      <div className="flex items-center justify-center max-md:flex-col">
        <div className=" hidden max-md:flex justify-start w-full">
          <SkillTitle title={title} className="max-md:block hidden" />
        </div>
        <div className="flex items-center justify-center max-md:gap-0 max-md:flex-col-reverse max-[895px]:gap-10 gap-36">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <SkillTitle title={title} className="max-md:hidden" />
            <div className="flex justify-between mt-4 flex-wrap max-w-[350px]">
              {skills.map((a, i) => (
                <Skill key={i} skill={a} />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 90, y: 100 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" w-[280px] "
          >
            <img src={imageSrc} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
