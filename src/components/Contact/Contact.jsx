/** @format */
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex  items-center gap-4 pb-1 mt-2 border-b-4 border-b-blue w-[320px]"
    >
      <div className=" h-10 w-10 rounded bg-blue "></div>
      <span className=" font-semibold text-[16px] text-white ">
        www.linkedin.com/in/ando-nirina
      </span>
    </motion.div>
  );
}
