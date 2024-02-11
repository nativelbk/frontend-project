/** @format */

import Contact from "../Contact/Contact";
import Title from "../Title/Title";
import { motion } from "framer-motion";
export default function Conatcts() {
  return (
    <section className="min-h-screen  flex flex-col justify-center gap-10 w-fit mx-auto items-center ">
      <div className="flex justify-start w-full ">
        <Title title={"Contact"} />
      </div>
      <div className="flex  items-center justify-center gap-[300px] max-lg:gap-[100px] max-md:flex-col-reverse max-[784px]:gap-[50px] ">
        <div className="text-white  ">
          <h4 className="font-semibold text-[24px] ">GET IN TOUCH</h4>
          <p className="font-medium ">Let&apos;s work together</p>
          <div className="mt-8 flex flex-col gap-3 ">
            <Contact />
            <Contact />
            <Contact />
            <Contact />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-[300px]"
        >
          <img src="/contact-image.svg" alt="" />
        </motion.div>
      </div>
    </section>
  );
}
