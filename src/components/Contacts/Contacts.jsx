/** @format */

import Contact from "../Contact/Contact";
import Title from "../Title/Title";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

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
            <Contact
              contactItem={"+261 32 57 637 96"}
              icon={<FaPhoneAlt className="text-[30px] " />}
            />
            <Contact
              contactItem={"ando.nirina.pro@gmail.com"}
              icon={<MdEmail className="text-[30px] " />}
            />
            <Contact
              contactItem={"Antananarivo, Madagascar"}
              icon={<FaLocationDot className="text-[30px] " />}
            />
            <Contact
              contactItem={"http://www.linkedin.com/in/ando-nirina"}
              icon={<FaLinkedin className="text-[30px] " />}
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-[300px]"
        >
          <img src="/contact-image.svg" alt="" />
        </motion.div>
      </div>
      <img src="/contact-pattern1.svg" className="absolute left-0 z-[-2]" />
    </section>
  );
}
