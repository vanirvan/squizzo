"use client";

import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ThemeButton } from "@/components/theme-button";

import { navMenuList } from "@/data/nav-list";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky inset-0 left-0 z-20 hidden h-svh w-12 flex-col justify-between bg-white py-4 shadow dark:bg-black sm:flex">
      <div></div>
      <nav className="my-auto flex flex-col items-center gap-4 px-4">
        {navMenuList.map((nav, key) => (
          <TooltipProvider
            key={key}
            delayDuration={200}
            skipDelayDuration={200}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <a href={nav.href}>
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    className={`transition-color duration-200 hover:bg-teal-200 ${pathname == nav.href ? "bg-teal-200 dark:bg-teal-800" : ""}`}
                  >
                    <nav.Icon className="h-4 w-4" />
                    <span className="sr-only">{nav.title}</span>
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">{nav.title}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </nav>
      <div className="flex w-full justify-center">
        <ThemeButton />
      </div>
    </aside>
  );
}
