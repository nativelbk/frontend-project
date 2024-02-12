/** @format */

import { styles } from "../../style";
import SkillList from "../Skill/SkillList";
import Title from "../Title/Title";

const skills1 = ["Python", "Html", "CSS", "JS", "C#", "SQL"];
const skills2 = ["Flask", "Pandas", "React", "Django"];

export default function Skills() {
  return (
    <div className="min-h-[100vh] max-w-full overflow-hidden  relative flex items-center justify-center" id="skills">
      <section className=" max-md:pb-2 max-w-[65%] max-lg:max-w-full max-md:max-w-[90%] max-sm:max-w-full mx-auto  flex flex-col justify-center">
      <div className={` max-sm:mb-3`}>
        <Title title={"Skills"} />
      </div>

        <div className="flex flex-col gap-[30px]">
          <SkillList
            skills={skills1}
            title={"Technologies"}
            imageSrc="/skills1.svg"
          />
          <SkillList
            skills={skills2}
            title={"Libraries and Frameworks"}
            imageSrc="/Group 66 (1).png"
          />
        </div>
      </section>
    </div>
  );
}
