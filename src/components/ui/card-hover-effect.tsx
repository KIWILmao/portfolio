"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectType {
  title: string;
  description: string;
  image: string[];
  github?: string;
  livelink?: string;
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: ProjectType[];
  className?: string;
}) => {
  const { theme } = useTheme();

  const [propject, setProject] = useState<ProjectType[]>(items);

  useEffect(() => {
    if (theme != "dark") {
      setProject((prev) => {
        return prev.map((item) => {
          if (item.title == "Portfolio") {
            return {
              title: "Portfolio",
              description: "Showcasing creativity in pixels and code! 🎨💻",
              link: "https://microsoft.com",
              github: "https://github.com/KIWILmao/portfolio",
              livelink: "https://shubhamparmar.me/",
              image: ["portfolioBlack.png", "portfolio2Black.png"],
            };
          } else {
            return item;
          }
        });
      });
    } else {
      setProject(items);
    }
  }, [theme]);

  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-4",
        className,
      )}
    >
      {propject.map((item, idx) => (
        <div
          // href={item?.link}
          key={item?.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-zinc-900 dark:bg-zinc-300 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <Carousel>
              <CarouselContent>
                {item.image.map((img) => {
                  return (
                    <CarouselItem key={img}>
                      <div className="p-1">
                        <Image
                          src={"/" + img}
                          width={400}
                          height={100}
                          alt={item.title}
                          className="rounded-md border border-black dark:border-white  "
                        />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              {item.image.length > 1 ? (
                <div>
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              ) : null}
            </Carousel>
            <CardDescription className="mt-2">
              {item.description}
            </CardDescription>
            <CardGithub github={item.github} livelink={item.livelink} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full max-w-96 sm:max-w-[442px] md:w-full p-4 overflow-hidden dark:bg-muted bg-white border border-black dark:border-white group-hover:border-white relative z-20",
        className,
      )}
    >
      <div className="relative z-50 flex flex-col h-full">{children}</div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-black font-bold tracking-wide mb-3 dark:text-white text-lg",
        className,
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-zinc-800 dark:text-zinc-400 tracking-wide leading-relaxed text-sm flex-grow",
        className,
      )}
    >
      {children}
    </p>
  );
};

export const CardGithub = ({
  className,
  github = "",
  livelink = "",
}: {
  className?: string;
  github?: string;
  livelink?: string;
}) => {
  const { theme } = useTheme();

  // if (!github && !livelink) {
  //     return <div></div>
  // }

  if (theme == "dark") {
    return (
      <div className={cn("flex gap-4 justify-end mt-4", className)}>
        <div className="p-2 border border-zinc-200 rounded-md transition-all hover:scale-125 ">
          <Link
            href={github}
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <Image
              src={"/logo/githubLight.svg"}
              width={25}
              height={25}
              alt="GitHub"
              className="text-zinc-800 dark:text-zinc-400 transition-all hover:scale-150 "
            />
          </Link>
        </div>
        <div className="p-2 border border-zinc-200 rounded-md transition-all hover:scale-125 ">
          <Link
            href={livelink}
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <Image
              src={"/logo/linklight.svg"}
              width={25}
              height={25}
              alt="External link"
              className="text-zinc-800 dark:text-zinc-400 transition-all hover:scale-150"
            />
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={cn("flex gap-4 justify-end mt-4", className)}>
      <div className="p-2 border border-zinc-800 rounded-md transition-all hover:scale-125">
        <Link
          href={github}
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer"
        >
          <Image
            src={"/logo/githubDark.svg"}
            width={25}
            height={25}
            alt="GitHub"
            className="text-zinc-800 dark:text-zinc-400 transition-all hover:scale-150"
          />
        </Link>
      </div>
      <div className="p-2 border border-zinc-800 rounded-md transition-all hover:scale-125">
        <Link
          href={livelink}
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer"
        >
          <Image
            src={"/logo/linkDark.svg"}
            width={25}
            height={25}
            alt="External link"
            className="text-zinc-800 dark:text-zinc-400 transition-all hover:scale-150"
          />
        </Link>
      </div>
    </div>
  );
};
