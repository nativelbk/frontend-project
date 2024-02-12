/** @format */
import { motion } from "framer-motion";

export default function Contact({ contactItem, icon, type }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex  items-center gap-4 pb-1 mt-2 border-b-4 max-[410px]:w-[300px] border-b-blue w-[360px]"
    >
      <div className=" h-10 w-10 rounded flex justify-center items-center bg-blue ">
        {icon}
      </div>
      {type === "mail" ? (
        <a
          href="mailto:ando.nirina.pro@gmail.com"
          className=" font-semibold w-fit text-[16px] text-white "
        >
          {contactItem}
        </a>
      ) : type === "phone" ? (
        <a
          href="tel:+261325763796"
          className=" font-semibold w-fit text-[16px] text-white "
        >
          {contactItem}
        </a>
      ) : type === "linkedin" ? (
        <a
          href="https://www.linkedin.com/in/ando-nirina"
          className=" font-semibold w-fit text-[16px] text-white "
        >
          {contactItem}
        </a>
      ) : (
        `${contactItem}`
      )}
    </motion.div>
  );
}
