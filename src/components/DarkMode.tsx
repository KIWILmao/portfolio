"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function DarkMode() {
  const { setTheme, theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}>
      <div>
        {theme == "dark" ? (
          <Sun className="text-black md:text-white " />
        ) : (
          <Moon className="md:text-white text-white " />
        )}
      </div>
    </div>
  );
}
