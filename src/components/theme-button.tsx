"use client";

import { SunIcon, MoonStarIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils/cn";

interface ComponentProps {
  padding?: number;
  size?: number;
  className?: string;
}

export function ThemeButton({ padding, size = 4, className }: ComponentProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant={"ghost"}
      size="icon"
      className={cn(`relative ${padding ? `p-${padding}` : ""}`, className)}
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
