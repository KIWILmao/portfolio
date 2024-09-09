import {
  databaseAndORM,
  languages,
  librariesAndFrameworks,
  ToolsAndTech,
} from "@/lib/data";
import { Button } from "./Button";

export const Skills = () => {
  return (
    <div
      className="flex flex-col relative z-10 min-h-screen justify-center items-center gap-8"
      id="skills"
    >
      <div>
        <h1 className="sm:text-7xl text-4xl sm:font-extrabold font-bold">
          Technical Skills
        </h1>
      </div>
      <div>
        <SkillCard data={languages} title="Languages" />
        <SkillCard
          data={librariesAndFrameworks}
          title="Libraries and Frameworks"
        />
        <SkillCard data={databaseAndORM} title="Database and ORM" />
        <SkillCard data={ToolsAndTech} title="Tools and Tech" />
      </div>
    </div>
  );
};

interface SkillCard {
  image: string;
  name: string;
}

function SkillCard({ data, title }: { data: SkillCard[]; title: string }) {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto p-4 ">
      <h1 className="sm:text-2xl text-xl  font-semibold sm:font-bold text-center mb-2">
        {title}
      </h1>
      <div className="flex flex-wrap justify-center items-start gap-4 w-full">
        {data.map((item, index) => (
          <Button key={index} image={item.image} name={item.name} />
        ))}
      </div>
    </div>
  );
}
