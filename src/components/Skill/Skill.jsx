/** @format */

export default function Skill({ skill }) {
  return (
    <div className=" gradient-border mt-4 min-w-24 flex justify-center  gradient2 w-fit px-6 py-2 max-sm:px-4 max-sm:py-1 font-bold bg-background   rounded-full   ">
      <span className="color-gradient2">{skill.toUpperCase()}</span>
    </div>
  );
}
