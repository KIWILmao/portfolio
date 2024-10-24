import Image from "next/image";
import Link from "next/link";

interface AwardProps {
  src: string;
  alt: string;
  link?: string;
}

const AwardCard = ({ src, alt, link }: AwardProps) => (
  <div className="relative group">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform duration-200 hover:scale-105"
    >
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        className="rounded-lg shadow-md"
      />
    </a>
  </div>
);

export const Holopin = () => {
  const awards: AwardProps[] = [
    {
      src: "https://assets.holopin.io/hf2024levels/level1-sloth-hello-coffee-0-0-0.webp",
      alt: "Award 1",
    },
    {
      src: "https://assets.holopin.io/hf2024levels/level2-sloth-hello-coffee-robe-0-0.webp",
      alt: "Award 2",
    },
    {
      src: "https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDd0ZDhncDUwMTMyMDlrMHd1OHFlNHg5IiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=",
      alt: "Early Bird",
    },
    {
      src: "https://assets.holopin.io/hf2024levels/level3-sloth-hello-coffee-robe-witch-0.webp",
      alt: "Award 3",
    },
    {
      src: "https://assets.holopin.io/hf2024levels/level4-sloth-hello-coffee-robe-witch-eclipse.webp",
      alt: "Award 4",
    },
  ];

  return (
    <div
      className="flex flex-col relative z-10 sm:mb-28 lg:my-0 justify-center items-center w-full lg:max-w-[1200px] px-6 lg:px-0"
      id="awards"
    >
      <div>
        <h1 className="sm:text-7xl text-4xl sm:font-extrabold font-bold mt-28">
          Awards
        </h1>
      </div>
      <Link
        href={"https://www.holopin.io/@kiwilmao"}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="my-10 p-8 rounded-xl shadow-lg relative border dark:border-zinc-200 border-zinc-900 lg:w-[1150px] flex justify-center cursor-pointer">
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <Image
              src="/holopin.png"
              alt="Background"
              fill
              className="object-cover dark:invert"
              priority
            />
            <div className="absolute inset-0 bg-white dark:bg-zinc-900 -z-10"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {awards.map((award, index) => (
              <AwardCard
                key={index}
                src={award.src}
                alt={award.alt}
                link={award.link}
              />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};
