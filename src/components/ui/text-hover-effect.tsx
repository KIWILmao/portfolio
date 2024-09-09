"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
  text,
  duration,
  textAnchor = "start",
  x = "0%",
  y = "50%",
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  textAnchor?: "start" | "middle" | "end";
  x?: string;
  y?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: x, cy: y });
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  const effectiveTextAnchor = isSmallScreen ? "middle" : textAnchor;
  const effectiveX = isSmallScreen ? "50%" : x;

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 320 50"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor={"var(--yellow-500)"} />
              <stop offset="25%" stopColor={"var(--red-500)"} />
              <stop offset="50%" stopColor={"var(--blue-500)"} />
              <stop offset="75%" stopColor={"var(--cyan-500)"} />
              <stop offset="100%" stopColor={"var(--violet-500)"} />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          animate={maskPosition}
          transition={{
            duration: duration ?? 0,
            ease: "easeOut",
          }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x={effectiveX}
        y={y}
        textAnchor={effectiveTextAnchor}
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-bold dark:stroke-white stroke-black fill-transparent text-5xl"
        style={{ opacity: hovered ? 1 : 1 }}
      >
        {text}
      </text>
      <motion.text
        x={effectiveX}
        y={y}
        textAnchor={effectiveTextAnchor}
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-bold fill-transparent text-5xl stroke-black dark:stroke-white"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x={effectiveX}
        y={y}
        textAnchor={effectiveTextAnchor}
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.8"
        mask="url(#textMask)"
        className="font-bold fill-transparent text-5xl"
      >
        {text}
      </text>
    </svg>
  );
};
