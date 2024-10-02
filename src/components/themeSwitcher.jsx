"use client";

import { useTheme } from "next-themes";

import { IconStore } from "./ui/icons";

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div
      className="fixed bottom-10 right-10 bg-secondary dark:bg-primary rounded-full p-2 cursor-pointer"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {IconStore[resolvedTheme === "dark" ? "moon" : "sun"]}
    </div>
  );
};

export default ThemeSwitcher;
