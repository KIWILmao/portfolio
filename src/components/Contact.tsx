import { RoughNotation } from "react-rough-notation";
import { ContactHandle } from "./ContactHandle";

export function Contact() {
  return (
    <div
      className="flex flex-col relative z-10  justify-center items-center gap-8 mt-24"
      id="contact"
    >
      <h1 className="sm:text-7xl text-4xl sm:font-extrabold font-bold">
        <RoughNotation
          type="underline"
          show={true}
          color="#ffb600"
          strokeWidth={2}
        >
          Contact Me
        </RoughNotation>
      </h1>
      <div className="my-10 border rounded-lg dark:border-zinc-200 border-zinc-900 lg:w-[1150px] flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 sm:p-6 lg:p-8 gap-4 sm:gap-5 lg:gap-7 w-full">
          <ContactHandle
            image="linkedin"
            link="https://www.linkedin.com/in/shubhamparmar1173/"
            name="Linkedin"
          />
          <ContactHandle
            image="github"
            link="https://github.com/KIWILmao"
            name="Github"
          />
          <ContactHandle
            image="discord"
            link="https://discord.com/users/503934977839464489"
            name="Discord"
          />
          <ContactHandle
            image="youtube"
            link="https://www.youtube.com/@KIWI_fx"
            name="Youtube"
          />
          <ContactHandle
            image="gmail"
            link="shubhamparmar1173@gmail.com"
            name="Email"
          />
          <ContactHandle
            image="x"
            link="https://x.com/KIWILmao_x0x0"
            name="X"
          />
        </div>
      </div>
    </div>
  );
}
