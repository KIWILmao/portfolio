import { projects } from "@/lib/data";
import { HoverEffect } from "./ui/card-hover-effect";

export const Projects = () => {
  return (
    <div
      className="flex flex-col relative z-10 min-h-screen justify-center items-center gap-8 max-w-[1200px] mt-24 p-4 "
      id="projects"
    >
      <h1 className="sm:text-7xl text-4xl sm:font-extrabold font-bold">
        Projects
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
};
