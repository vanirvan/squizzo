"use client";

import { SunIcon, MoonStarIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

interface ComponentProps {
  padding?: number | null;
  size?: number;
}

export function ThemeButton({ padding = null, size = 4 }: ComponentProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant={"ghost"}
      size="icon"
      className={`relative ${padding ? `p-${padding}` : ""}`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <SunIcon
        className={`absolute inset-0 left-1/2 top-1/2 block h-${size} w-${size} -translate-x-1/2 -translate-y-1/2 transform dark:hidden`}
      />
      <MoonStarIcon
        className={`absolute inset-0 left-1/2 top-1/2 hidden h-${size} w-${size} -translate-x-1/2 -translate-y-1/2 transform dark:block`}
      />
    </Button>
  );
}
