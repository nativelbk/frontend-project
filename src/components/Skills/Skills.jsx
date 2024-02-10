/** @format */

import SkillList from "../Skill/SkillList";
import Title from "../Title/Title";

const skills1 = ["Python", "Html", "CSS", "JS", "C#", "SQL"];
const skills2 = ["Flask", "Pandas", "REact", "Django"];

export default function Skills() {
  return (
    <section className="min-h-screen w-fit mx-auto  flex flex-col justify-center">
      <div>
        <Title title={"Skills"} />
      </div>
      <div className="flex flex-col mt-4 gap-[100px]">
        <SkillList
          skills={skills1}
          title={"Technologies"}
          imageSrc="/skills1.svg"
        />
        <SkillList
          skills={skills2}
          title={"Libraries and Frameworks"}
          imageSrc="/skills2.png"
        />
      </div>
    </section>
  );
}
