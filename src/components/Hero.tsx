import { RoughNotation } from "react-rough-notation";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { FlipWords } from "./ui/flip-words";
import { words } from "@/lib/data";

export function Hero() {
  return (
    <div
      className="flex flex-col relative z-10 mt-40 mb-28 sm:mb-28 lg:my-0  lg:min-h-screen justify-center items-center sm:justify-center sm:items-center w-full lg:max-w-[1200px] px-6 lg:px-0"
      id="home"
    >
      <div className="w-full">
        <div className="flex justify-center md:justify-start">
          <TextHoverEffect text="HELLO," textAnchor="end" x="47.7%" y="60%" />
        </div>
      </div>
      <div className="text-4xl md:text-6xl lg:text-8xl font-extrabold select-none text-center lg:text-left w-full">
        I&apos;m Shubham Parmar
        <div className="text-xl md:text-2xl dark:text-zinc-400 text-zinc-600 font-medium mt-2">
          <RoughNotation type="underline" show={true} color="#ffb600">
            <FlipWords words={words} />
          </RoughNotation>
        </div>
      </div>
    </div>
  );
}
