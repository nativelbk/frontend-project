/** @format */
import { motion } from "framer-motion";
import { styles } from "../../style";
import Timeline from "../Timeline/Timeline";
import Title from "../Title/Title";

export function Experience() {
  return (
    <div
      className="min-h-[100vh] max-w-full relative flex items-center justify-center"
      id="experiences"
    >
      <section className="  max-w-[65%] max-lg:max-w-full max-md:max-w-[90%] max-sm:max-w-full  max-md:mx-auto  mx-auto  flex flex-col justify-center">
        <div className="absolute z-[-1]  left-[0]  ">
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
        <div className="max-sm:ml-10">
          <Title title={"Experiences"} />
        </div>
        <Timeline />
      </section>
    </div>
  );
}
