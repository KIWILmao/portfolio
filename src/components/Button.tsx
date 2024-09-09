"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export const Button = ({ image, name }: { image: string; name: string }) => {
  const [tiltClass, setTiltClass] = useState("");
  const [bounceClass, setBounceClass] = useState("");

  useEffect(() => {
    const tiltClasses = ["hover:-rotate-3", "hover:rotate-3"];
    const bounceClasses = [
      "hover:translate-y-[-2px]",
      "hover:translate-y-[-4px]",
    ];
    const randomTilt =
      tiltClasses[Math.floor(Math.random() * tiltClasses.length)];
    const randomBounce =
      bounceClasses[Math.floor(Math.random() * bounceClasses.length)];
    setTiltClass(randomTilt);
    setBounceClass(randomBounce);
  }, []);

  return (
    <div className="perspective-1000 group">
      <button
        className={`relative inline-flex h-14 overflow-hidden rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,0.7)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)] border border-black dark:border-white transition-all duration-300 ease-in-out ${tiltClass} ${bounceClass} hover:scale-105 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.7)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.7)]`}
      >
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md text-sm font-medium text-black dark:text-white backdrop-blur-3xl bg-white dark:bg-zinc-800 gap-2 p-3 transition-colors duration-300 group-hover:bg-gray-100 dark:group-hover:bg-zinc-700">
          <Image
            src={`/logo/${image}.svg`}
            width={35}
            height={35}
            alt={name}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="sm:text-xl text-base relative">{name}</span>
        </span>
      </button>
    </div>
  );
};
