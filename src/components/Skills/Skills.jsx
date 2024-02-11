/** @format */

import { styles } from "../../style";
import SkillList from "../Skill/SkillList";
import Title from "../Title/Title";

const skills1 = ["Python", "Html", "CSS", "JS", "C#", "SQL"];
const skills2 = ["Flask", "Pandas", "REact", "Django"];

export default function Skills() {
  return (
    <div className="min-h-screen" id="skills">
      <div className={`${styles.paddingTittle} max-sm:mb-3`}>
        <Title title={"Skills"} />
      </div>
      <section className=" w-fit mx-auto  flex flex-col justify-center">

        <div className="flex flex-col mt-2 gap-[30px]">
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
