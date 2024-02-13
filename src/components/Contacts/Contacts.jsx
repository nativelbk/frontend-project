/** @format */

import Contact from "../Contact/Contact";
import Title from "../Title/Title";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { styles } from "../../style";

export default function Conatcts() {
  return (
    <div className="min-h-[50vh] overflow-x-hidden mt-20" id="contact">
      <div className={` max-sm:mb-3 max-w-[50%] mx-auto max-lg:max-w-[80%] max-lg:mx-auto `}>
        <Title title={"Contact"} />
      </div>
      <section className="flex flex-col justify-center gap-10  items-center ">
        <div className="flex  items-center justify-center gap-[200px] max-2xl:gap-[100px] max-lg:gap-[30px] max-md:flex-col-reverse max-[784px]:gap-[50px] ">
          <div className="text-white  ">
            <h4 className="font-semibold text-[24px] ">GET IN TOUCH</h4>
            <p className="font-medium ">Let&apos;s work together</p>
            <div className="mt-8 flex flex-col gap-3">
              <Contact
                contactItem={"+261 32 57 637 96"}
                icon={<FaPhoneAlt className="text-[30px] " />}
                type={"phone"}
              />
              <Contact
                contactItem={"ando.nirina.pro@gmail.com"}
                icon={<MdEmail className="text-[30px] " />}
                type={"mail"}
              />
              <Contact
                contactItem={"Antananarivo, Madagascar"}
                icon={<FaLocationDot className="text-[30px] " />}
                type={" "}
              />
              <Contact
                contactItem={"http://www.linkedin.com/in/ando-nirina"}
                icon={<FaLinkedin className="text-[30px] " />}
                type={"linkedin"}
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 90 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              rotate: 0,
            }}
            transition={{ duration: 0.5 }}
            className="w-[400px] max-lg:w-[300px]"
          >
            <img src="/contact-image.svg" alt="" />
          </motion.div>
        </div>
        <img src="/contact-pattern1.svg" className="absolute left-0 z-[-2]" />
      </section>
    </div>
  );
}
