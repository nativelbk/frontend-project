/** @format */
import { motion } from "framer-motion";

export default function Project({ title, description, imageSrc, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" bg-background shadow-lg px-3 py-4 rounded-[20px] max-w-[300px] overflow-hidden"
    >
      {/* <div className=" w-[250px] xl:min-w-[300px] max-sm:w-[260px] 2xl:min-w-[350px] max-[388px]:w-[280px] max-[643px]:w-[300px] max-[1008px]:w-[260px] max-[1144px]:w-[270px] flex flex-col gap-4 ">
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
      </div> */}
      <div class="flex flex-col  ">
        <img src={imageSrc} />
        <div className="flex flex-col gap-5 py-3">
          <div className="px-3">
            <p className="font-bold text-xl mb-2 text-white ">{title}</p>
            <span className="font-medium block text-white min-h-[50px]">
              {description}
            </span>
          </div>
          <div className="px-3">
            <a
              className="bg-blue w-fit px-4 py-2 text-white rounded-2xl hover:bg-violet shadows-lg font-semibold "
              href={link}
            >
              See Project
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
