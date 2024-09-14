"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function DarkMode() {
  const { setTheme, theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    if (isRotating) {
      const timer = setTimeout(() => setIsRotating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isRotating]);

  const handleThemeChange = () => {
    setIsRotating(true);
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div onClick={handleThemeChange} className="cursor-pointer">
      <div>
        {theme == "dark" ? (
          <Sun
            className={`
              text-black md:text-white 
              transition-all duration-500 ease-in-out
              ${isRotating ? "animate-spin" : ""}
            `}
          />
        ) : (
          <Moon
            className={`
              md:text-white text-white 
              transition-all duration-500 ease-in-out
              ${isRotating ? "animate-spin" : ""}
            `}
          />
        )}
      </div>
    </div>
  );
}

export default DarkMode;
