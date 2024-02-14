/** @format */

export default function Skill({ skill }) {
  return (
    <div className=" gradient-border mt-4 relative min-w-24 flex justify-center w-fit px-6 py-2 max-sm:px-4 max-sm:py-1 font-bold       ">
      <div className=" h-full rounded-full bg-background absolute top-0 left-0 right-0 w-full z-50"></div>
      <span className="color-gradient2  z-50 block ">
        {skill.toUpperCase()}
      </span>
    </div>
  );
}
