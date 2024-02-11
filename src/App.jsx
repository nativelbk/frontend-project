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
function App() {
  return (
    <main className="flex cont relative flex-col gap-20">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Conatcts />
      <Footer />
    </main>
  );
}

export default App;
