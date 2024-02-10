/** @format */

export default function Skill({ skill }) {
  return (
    <div className=" gradient-border mt-4 min-w-24 flex justify-center  gradient2 w-fit px-6 py-2 font-bold bg-background   rounded-full   ">
      <span className="color-gradient2">{skill.toUpperCase()}</span>
    </div>
  );
}
