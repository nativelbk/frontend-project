/** @format */
import { motion } from "framer-motion";

export default function Project({ title, description, imageSrc, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" h-[400px] xl:min-w-[350px]  max-xl:min-w-[300px] xl:min-h-[400px] 2xl:min-h-[450px] 2xl:min-w-[400px] flex justify-center  py-4 bg-cardBackground rounded-3xl "
    >
      <div className=" w-[250px] xl:min-w-[300px] 2xl:min-w-[350px] max-[388px]:w-[280px] max-[643px]:w-[300px] max-[1008px]:w-[260px] max-[1144px]:w-[270px] flex flex-col gap-4 ">
        <img src={imageSrc} />
        <div className="text-white flex flex-col gap-5 w-[95%] mx-auto ">
          <div>
            <p className="font-bold text-[24px]  ">{title}</p>
            <span className="font-medium block min-h-[50px]">
              {description}
            </span>
          </div>
          <a
            className="bg-blue w-fit px-4 py-2 rounded-2xl font-semibold "
            href={link}
          >
            See Project
          </a>
        </div>
      </div>
    </motion.div>
  );
}
