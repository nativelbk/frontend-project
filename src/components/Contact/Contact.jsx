/** @format */
import { motion } from "framer-motion";

export default function Contact({ contactItem, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex  items-center gap-4 pb-1 mt-2 border-b-4 border-b-blue w-[360px]"
    >
      <div className=" h-10 w-10 rounded flex justify-center items-center bg-blue ">
        {icon}
      </div>
      <span className=" font-semibold w-fit text-[16px] text-white ">
        {contactItem}
      </span>
    </motion.div>
  );
}
