"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

interface ContactHandle {
  name: string;
  link: string;
  image: string;
}
export function ContactHandle({ image, link, name }: ContactHandle) {
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-between border rounded-lg dark:border-zinc-200 border-zinc-900 max-w-[328px] py-2 px-3 dark:bg-zinc-900 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,0.7)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)]">
      <div>
        <p className="font-bold text-lg">{name}</p>
        <p>
          <RoughNotation
            type="underline"
            show={true}
            padding={[0, 0, 4, 0]}
            color={theme == "dark" ? "#e4e4e7" : "#18181b"}
            animate={true}
          >
            <Link
              href={name === "Email" ? `mailto:${link}` : link}
              rel="noopener noreferrer"
              target="_blank"
              className="cursor-pointer"
            >
              {link.substring(0, 25) + "..."}
            </Link>
          </RoughNotation>
        </p>
      </div>
      <div>
        {theme == "dark" && name == "X" ? (
          <Image
            src={`/logo/${image}dark.svg`}
            height={35}
            width={35}
            alt="git"
            className="transition-all hover:scale-110"
          />
        ) : name == "X" ? (
          <Image
            src={`/logo/${image}.svg`}
            height={35}
            width={35}
            alt="git"
            className="transition-all hover:scale-110"
          />
        ) : (
          <Image
            src={`/logo/${image}.svg`}
            height={45}
            width={45}
            alt="git"
            className="transition-all hover:scale-110"
          />
        )}
      </div>
    </div>
  );
}
