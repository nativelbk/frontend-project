/** @format */
import { motion } from "framer-motion";

export default function Project() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="h-[400px] max-[388px]:w-[300px] max-[1008px]:w-[280px] max-[643px]:w-[330px]   max-[1144px]:w-[300px]  w-[330px] flex justify-center  py-4 bg-cardBackground rounded-3xl "
    >
      <div className=" w-[300px] max-[388px]:w-[280px] max-[643px]:w-[300px] max-[1008px]:w-[260px] max-[1144px]:w-[270px] flex flex-col gap-4 ">
        <img src="/mademoiselleai.svg" />
        <div className="text-white flex flex-col gap-5 w-[95%] mx-auto ">
          <div>
            <p className="font-bold text-[24px]  ">Mademoiselleai</p>
            <span className="font-medium">
              A website with AI solutions and automates
            </span>
          </div>
          <a
            className="bg-blue w-fit px-4 py-3 rounded-full font-semibold "
            href="#"
          >
            See Project
          </a>
        </div>
      </div>
    </motion.div>
  );
}
