/** @format */

import SkillTitle from "../Title/SkillTitle";
import Skill from "./Skill";

export default function SkillList({ skills, imageSrc, title }) {
  return (
    <div>
      <div className="flex items-center justify-center max-md:flex-col">
        <div className=" hidden max-md:flex justify-start w-full">
          <SkillTitle title={title} className="max-md:block hidden" />
        </div>
        <div className="flex items-center justify-center max-md:gap-0 max-md:flex-col-reverse max-[895px]:gap-10 gap-36">
          <div>
            <SkillTitle title={title} className="max-md:hidden" />
            <div className="flex justify-between mt-4 flex-wrap max-w-[350px]">
              {skills.map((a, i) => (
                <Skill key={i} skill={a} />
              ))}
            </div>
          </div>
          <div className=" w-[280px] ">
            <img src={imageSrc} />
          </div>
        </div>
      </div>
    </div>
  );
}
