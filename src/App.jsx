/** @format */

import "./App.css";
import About from "./components/About/About";
import AboutImage from "./components/About/AboutImage";
import AboutText from "./components/About/AboutText";
import Contact from "./components/Contact/Contact";
import Conatcts from "./components/Contacts/Contacts";
import { Experience } from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Skill/Skill";
import Skills from "./components/Skills/Skills";
import Timeline from "./components/Timeline/Timeline";
import SkillTitle from "./components/Title/SkillTitle";
import Title from "./components/Title/Title";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { motion } from "framer-motion";
import Particles from "./components/Hero/Particles";
function App() {
  return (
    <main className="flex overflow-x-hidden  max-md:gap-5 relative flex-col ">
      <Navbar />
      {/* <img
        src="/Achernar.svg"
        className=" z-[-1]  absolute right-[-20%]  top-[-60px]   "
      /> */}
      <div className="absolute z-[-1] top-16  right-[0]  ">
        <motion.div
          animate={{
            background: ["#1976D2", "#FF4D6D"],
            scale: [1, 0.95, 1.1],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className=" blr max-sm:hidden"
        ></motion.div>
        <motion.div
          animate={{
            background: ["#1976D2", "#152432"],
            scale: [1, 0.95, 1.1],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className=" blr max-sm:hidden "
        ></motion.div>
        <motion.div
          animate={{
            background: ["#1976D2", "#7B2CBF"],
            scale: [1, 0.95, 1.1],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className=" blr max-sm:hidden  "
        ></motion.div>
      </div>
      <div className="flex flex-col max-md:gap-40">
        <Hero />
        <About />
        <Experience />
      </div>
      <div className="flex overflow-x-hidden justify-between  max-sm:gap-96 relative flex-col ">
        <Skills />
        <Projects />
        <Conatcts />
      </div>
      <img
        src="/Achernar.svg"
        className=" z-[-1] absolute right-[-20%]  top-[-60px]   "
      />
      <Particles/>
      <Footer />
    </main>
  );
}

export default App;
