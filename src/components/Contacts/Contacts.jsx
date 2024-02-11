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
    <div className="min-h-[5vh]" id="contact">
      <div className={`${styles.paddingTittle} max-sm:mb-3`}>
        <Title title={"Contact"} />
      </div>
    <section className="flex flex-col justify-center gap-10 w-fit mx-auto items-center " >
      <div className="flex  items-center justify-center gap-[150px] max-lg:gap-[30px] max-md:flex-col-reverse max-[784px]:gap-[50px] ">
        <div className="text-white  ">
          <h4 className="font-semibold text-[24px] ">GET IN TOUCH</h4>
          <p className="font-medium ">Let&apos;s work together</p>
          <div className="mt-8 flex flex-col gap-3">
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
